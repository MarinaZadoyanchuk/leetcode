/* 
  You are climbing a stair case. It takes n steps to reach to the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
const {memoize} = require('../utils')

/**
 * @param {number} n
 * @return {number}
 */


const climbingStairs = memoize(function (n) {
  if (n <= 2) {
    return n
  }

  return climbingStairs(n - 2) + climbingStairs(n - 1)
})

module.exports = climbingStairs