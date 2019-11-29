const myPow = require('./index')

const testCases = [
  [[1, 0], 1],
  [[1, 2], 1],
  [[2, 2], 4],
  [[2, -2], 0.25],
  [[-1.00000, 2147483647], -1],
  [[-1.00000, -2147483648], 1],
]

for (const [input, output] of testCases) {
  const res = myPow(...input)
  if (res === output) {
    console.log('✓ test passed')
  } else {
    console.log(`💔 test failed: expect res ${output}, actual res ${res}`)
    process.exit(1)
  }
}