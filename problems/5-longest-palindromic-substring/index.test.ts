import {isPalindrome, longestPalindrome, getPalindromeAroundCenter, longestPalindromePD} from './index'
import {expect} from 'chai'

describe('The longest palindromic substring: isPalindrome', () => {
  it('empty string is palindrome', () => {
    expect(isPalindrome('')).equal(true)
  })

  it('1-char string is palindrome', () => {
    expect(isPalindrome('a')).equal(true)
  })

  it('palindrome is palindrome', () => {
    expect(isPalindrome('madam')).equal(true)
  })

  it('not palindrome', () => {
    expect(isPalindrome('madama')).equal(false)
  })
})

describe('getPalindromeAroundCenter', () => {
  it('get palindrome', () => {
    expect(getPalindromeAroundCenter('madbma', 2, 2)).to.eql(1, 'madbma')
    expect(getPalindromeAroundCenter('abba', 1, 2)).to.eql(4, 'abba')
    expect(getPalindromeAroundCenter('madam', 2, 2)).to.eql(5, 'madam')
  })
})


describe('The longest palindromic substring', () => {
  it('empty string is palindrome', () => {
    expect(longestPalindrome('')).equal('')
  })

  it('1-char string is palindrome', () => {
    expect(longestPalindrome('a')).equal('a')
  })

  it('detect full word', () => {
    expect(longestPalindrome('madam')).equal('madam')
  })

  it('detect palindrome substring', () => {
    expect(longestPalindrome('madama')).equal('madam')
    expect(longestPalindrome('babad')).equal('bab')
    expect(longestPalindrome('cbbd')).equal('bb')
  })
})

describe.only('The longest palindromic substring: dynamic programming', () => {
  it('empty string is palindrome', () => {
    expect(longestPalindromePD('')).equal('')
  })

  it('1-char string is palindrome', () => {
    expect(longestPalindromePD('a')).equal('a')
  })

  it('detect full word', () => {
    expect(longestPalindromePD('madam')).equal('madam')
  })

  it('detect palindrome substring', () => {
    expect(longestPalindromePD('madama')).equal('madam')
    expect(longestPalindromePD('babad')).equal('bab')
    expect(longestPalindromePD('cbbd')).equal('bb')
    expect(longestPalindromePD('forgeeksskeegfor')).equal('geeksskeeg')
  })
})