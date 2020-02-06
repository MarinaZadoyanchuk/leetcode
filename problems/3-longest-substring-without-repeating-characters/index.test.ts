import {lengthOfLongestSubstring} from './index'
import {expect} from 'chai'

describe('Length of longest substring', () => {
  it('check lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring('')).equal(0, 'zero check')
    expect(lengthOfLongestSubstring('abcabcbb')).equal(3)
    expect(lengthOfLongestSubstring('bbbbbb')).equal(1)
    expect(lengthOfLongestSubstring('pwwkew')).equal(3)
    expect(lengthOfLongestSubstring('dvdf')).equal(3)
    expect(lengthOfLongestSubstring('abcdef')).equal(6)
  })
})