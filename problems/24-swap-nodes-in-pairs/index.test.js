const swapPairs = require('./index')
const {getListByArray, areListsEqual} = require('./utils')

const testCases = [
  [null, null],
  [getListByArray([1, 2, 3, 4]), getListByArray([2, 1, 4, 3])],
  [getListByArray([3]), getListByArray([3])],
]

for (const [input, output] of testCases) {
  const res = swapPairs(input)
  if (areListsEqual(res, output)) {
    console.log(`test passed ✓`)
  } else {
    console.log(`💔test failed: expected result ${output}, actual result ${res}`)
    process.exit(1)
  }
}