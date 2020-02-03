/* Given a string, find the length of the longest substring without repeating characters. */

export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0
  }

  let uniq = {}
  let max: number = 1
  let skipFrom: number = -1


  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (uniq[current] > skipFrom) { // the char is not uniq in the slide
      skipFrom = uniq[current]
    } else {
      max = Math.max(max, i - skipFrom) // if the char is uniq - recalculate max length
    }

    uniq[current] = i
  }

  return max
}