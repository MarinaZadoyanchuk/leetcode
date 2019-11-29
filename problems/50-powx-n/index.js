/* Implement pow(x, n), which calculates x raised to the power n (xn). */

// O(n)
function myPowSlow(x, n) {
  const xSign = Math.sign(x)

  // case with 1.000000, -1.000000, 1, -1
  // avoid recursion for 1 or -1
  if (x.toString() == xSign) {
    if (x < 0) {
      const isEvenN = n % 2 === 0
      return isEvenN ? x * xSign : x
    }

    return x
  }

  let acc = 1
  let i = n
  const nSign = Math.sign(n)

  while (i * nSign > 0) {
    acc *= x
    i = i - nSign
  }
  
  if (nSign < 0) {
    return 1 / acc
  }

  return acc
}

// O(logn)
function myPow(x, n) {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return x
  }

  if (n < 0) {
    return 1 / myPow(x, n * -1)
  }

  const isEvenN = n % 2 === 0

  return isEvenN ? myPow(x * x, Math.floor(n / 2)) : x * myPow(x * x, Math.floor(n / 2))
}

module.exports = myPow