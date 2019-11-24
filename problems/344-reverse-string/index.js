/* Write a function that reverses a string. The input string is given as an array of characters char[]. */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


const reverseString = function(s, index = 0) {
    if (index >= s.length / 2) {
        return
    }
    const temp = s[index]
    s[index] = s[s.length - 1 - index]
    s[s.length - 1 - index] = temp
    reverseString(s, index + 1)
}

module.exports = reverseString