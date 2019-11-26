const fib = require('./index')

const testCases = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
]


for (const [input, output] of testCases) {
  const res = fib(input)
  
  if (res === output) {
    console.log('✓ test passed')
  } else {
    console.log(`💔test failed: expected result ${output}, actual result ${res}`)
    process.exit(1)
  }
}