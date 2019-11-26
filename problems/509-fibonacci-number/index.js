/* Given N, calculate F(N). Implementation with memoization */
const {memoize} = require('../utils')

const fib = memoize(function (n) {
  if (n < 2) {
    return n
  }

  return fib(n - 2) + fib(n -1)
})

module.exports = fib