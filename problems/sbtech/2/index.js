function getDistance([r1, g1, b1], [r2, g2, b2]) {
  const rDiff = Math.pow(r1 - r2, 2)
  const gDiff = Math.pow(g1 - g2, 2)
  const bDiff = Math.pow(b1 - b2, 2)

  return Math.sqrt(rDiff + gDiff + bDiff)
}

const COLOR_POINTS = {
  Black: [0, 0, 0],
  White: [255, 255, 255],
  Red: [255, 0, 0],
  Green: [0, 255, 0],
  Blue: [0, 0, 255]
}

function convertBinaryStringToPoint(str) {
  const point = []
  for (let i = 0; i < 24; i+=8) {
    point.push(parseInt(str.slice(i, i + 8), 2))
  }

  return point
}

function getClosestColorPoint(point) {
  let min = {distance: Infinity}
  for(let [color, colorPoint] of Object.entries(COLOR_POINTS)) {
    const distance = getDistance(point, colorPoint)

    if (min.distance > distance) {
      min.distance = distance
      min.color = color
    } else if (min.distance === distance) {
      return 'Ambiguous'
    }
  }

  return min.color
}

function closestColor(pixels) {
  return pixels.map(pixel => getClosestColorPoint(convertBinaryStringToPoint(pixel)))
}

console.log(closestColor(['010111011010010110000011', '000000001111111111111111']))