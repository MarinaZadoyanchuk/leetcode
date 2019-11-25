const generate = require('./index')

const testCases = [
  [5, [
    [1],
    [1,1],
    [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1]
  ]]
]

for (const [input, output] of testCases) {
  const res = generate(input)
  console.log(res, 'res')
}