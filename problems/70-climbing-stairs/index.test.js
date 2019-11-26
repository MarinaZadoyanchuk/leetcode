const climbingStairs = require('./index')

const testCases = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 5],
]


for (const [input, output] of testCases) {
  const res = climbingStairs(input)
  
  if (res === output) {
    console.log('✓ test passed')
  } else {
    console.log(`💔test failed: expected result ${output}, actual result ${res}`)
    process.exit(1)
  }
}