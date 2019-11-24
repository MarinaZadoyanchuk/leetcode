const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')
const {toKebabCase} = require('./utils')

const questions = [
    {
        type: 'input',
        name: 'problemNumber',
        message: 'Define number of current problem',
        validate: (input) => {
            return Boolean(input)
        }
    }, {
        type: 'input',
        name: 'problemTitle',
        message: 'Add problem title',
        validate: (input) => {
            return Boolean(input)
        }
    }, {
        type: 'input',
        name: 'problemDesc',
        message: 'Add problem desc',
    },
]

function createProblem() {
    inquirer.prompt(questions).then((answers) => {
        const {problemNumber, problemTitle, problemDesc} = answers

        const directoryName = `${problemNumber}-${toKebabCase(problemTitle)}`
        const pathToDirectory = path.join(__dirname, '../problems', directoryName)

        if (fs.existsSync(pathToDirectory)) {
            console.log(chalk.red(`problem ${directoryName} already exists`))
            process.exit(1)
        }

        fs.mkdirSync(pathToDirectory)


        const indexPath = 'index.js'
        const indexTestPath = 'index.test.js'
        const indexContent = `/* ${problemDesc} */`

        fs.writeFileSync(path.join(pathToDirectory, indexPath), indexContent)
        fs.writeFileSync(path.join(pathToDirectory, indexTestPath), '')

        console.log(chalk.green(`problem ${directoryName} initialized`))
    })
}

createProblem()