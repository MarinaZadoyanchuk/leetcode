const reverseString = require('./index')

const testCases = [
    [[], []],
    [["h","e","l","l","o"], ["o","l","l","e","h"]],
    [["H","a","n","n","a","h"], ["h","a","n","n","a","H"]]
]

for (const [input, expectedResult] of testCases) {
    reverseString(input)
    const isEqual = input.every((char, i) => expectedResult[i] === char)

    if (!isEqual) {
        console.log(`reverse string with ${input} input has wrong result ${expectedResult}`)
        process.exit(1)
    }

    console.log('ALL TESTS PASSED')
}
