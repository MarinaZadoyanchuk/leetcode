const getRow = require('./index')

const testCases = [
  [3, [1,3,3,1]]
]

for (const [input, output] of testCases) {
  const res = getRow(input)

  if (res.length != output.length || res.some((el, index) => el != output[index])) {
    console.log(`💔test failed: expected res ${output}, actual result ${res}`)
    process.exit(1)
  }

  console.log(`test passed ✓`)
}