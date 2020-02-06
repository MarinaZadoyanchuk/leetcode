/* Given a string s, find the longest palindromic substring in s */

export function isPalindrome(s: string): boolean {
  let i = 0

  while(i < s.length / 2) {
    if (s[i] !== s[s.length - i - 1]) return false
    i++
  }

  return true
}

export function getPalindromeAroundCenter(s: string, left: number, right: number) : number {
  while (left >= 0 && right < s.length && s[left] === s[right]) { // if chars from both ends are equals => palindrome keeps 
    left--
    right++
  }

  return right - left - 1 // ends is [-1, length)
}

// around center solution
// for every char check if the symbol is palindrome center
export function longestPalindrome(s: string): string {
  if (s.length <= 1) return s

  let pointer = 0
  let maxPalindrome = {left: 0, right: 0, length: 0}

  while(pointer < s.length) {
    if (maxPalindrome.length / 2 > s.length - pointer) {
      break
    }
    const l1 = getPalindromeAroundCenter(s, pointer, pointer) // palindrome with the letter in center
    const l2 = getPalindromeAroundCenter(s, pointer, pointer + 1) // symetric palindrome
    
    const length = Math.max(l1, l2)

    if (length > maxPalindrome.length) {
      maxPalindrome.length = length
      maxPalindrome.left = pointer - Math.round(length / 2) + 1
      maxPalindrome.right = pointer + Math.round(length / 2)
    }

    pointer++
  }

  return s.substr(maxPalindrome.left, maxPalindrome.length)
}

// Dynamic Programming solution
// build function to detect if the string is palindrome by previous calculation
// P(i, j) {
//  if (s[i] === s[j] && P(i + 1, j - 1) === true) {
//    return true
//  }
//  return false
// }
// P[i, i] is true, P[i, i + 1] is true, if s[i] === s[i + 1]
// build table t[n][n] with according value P(i,j)

function checkPalindromePD(s: string, i: number, j: number, a: boolean [] []): boolean {
  if (i >= s.length || j < 0) {
    return true
  }

  if (i === j) {
    a[i][j] = true
  }

  if (i === j + 1 && s[i] === s[j]) {
    a[i][j] = true
  } else if (a[i][j] === undefined) {
    a[i][j] = s[i] === s[j] && checkPalindromePD(s, i + 1, j - 1, a)
  }

  return a[i][j]
}


export function longestPalindromePD(s: string) {
  let maxLength = 0 // one char is palindrome
  let from = 0
  // create quadratic matrix
  let t = new Array(s.length)
  for(let i = 0; i < t.length; i++) {
    t[i] = new Array(t.length)
    t[i][i] = true
    maxLength = 1 // each char is palindrome, then maxLength at least is equal 1 if string is not empty
  }

  for (let k = 1; k <= s.length; k++) {
    for(let i = 0; i < s.length - k; i++) {
      if(checkPalindromePD(s, i, i + k, t) && k >= maxLength) { // k is offset from i
        maxLength = k + 1 // substring palindrome length is k(offset) + 1(i)
        from = i
      }
    }
  }

  return s.substr(from, maxLength)
}