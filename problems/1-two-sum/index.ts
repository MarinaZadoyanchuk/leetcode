export function twoSum(nums: number [], target) {
  const seenIndexes = new Map()
  let i = 0


  while (i < nums.length) {
    const searchFor = target - nums[i]
    if (seenIndexes.has(searchFor)) {
      return [seenIndexes.get(searchFor), i]
    }

    seenIndexes.set(nums[i], i)
    i++
  }

  throw Error('Solution either does not exist or is not unique')
}