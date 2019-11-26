const {getListByArray, areListsEqual} = require('../utils')

const reverseList = require('./index')

const testCases = [
  [[], []],
  [getListByArray([1, 2, 3, 4, 5]), getListByArray([5, 4, 3, 2, 1])]
]

for (const [input, output] of testCases) {
  const res = reverseList(input)
  if (areListsEqual(res, output)) {
    console.log('test passed ✓')
  } else {
    console.log(`💔test failed: expected result ${output}, actual result ${res}`)
    process.exit(1)
  }
}