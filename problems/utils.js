const runTest = (cases, func) => {
    for (const [input, expectedResult] of cases) {
        console.log(input)
        const output = func(input)
        if (output != expectedResult) {
            console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
            console.log(`RESULT: ${output}`)
            console.log(`EXPECTED RESULT: ${expectedResult}`)
            process.exit(1)
        } else {
            console.log(`THE TEST RUNS SUCCESSFULLY`)
        }
    }
}

module.exports = {runTest}