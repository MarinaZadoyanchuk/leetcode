/* Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle. */

// the approach failed by timeout
function getCellVal(i, j) {
  if (j === 0 || j === i) {
    return 1
  }

  return getCellVal(i - 1, j - 1) + getCellVal(i - 1, j)
}

const generate = require("../118-pascal's-triangle/")



function getRow(rowIndex) {
  const triangle = generate(rowIndex + 1)

  return triangle[rowIndex]
}

module.exports = getRow
