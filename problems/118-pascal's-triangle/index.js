/* Given a non-negative integer numRows, generate the first numRows of Pascal's triangle. */

function getCellVal(i, j, triangle) {
  if (j === 0 || j === i) {
    return 1
  }

  return triangle[i - 1][j - 1] + triangle[i - 1][j]
}

function generate(numRows) {
  let i = 0
  const triangle = []
  while (i < numRows) {
    triangle[i] = new Array(i)
    let j = 0
    while (j <= i) {
      triangle[i][j] = getCellVal(i, j, triangle)
      j++
    }
    i++
  }

  return triangle
}

module.exports = generate