/* 
  There are two sorted arrays nums1 and nums2 of size m and n respectively.
  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). 
*/

export function findMedianSortedArrays(nums1: number [], nums2: number []): any {
  if (nums1.length < nums2.length) { // first array always bigger
    const temp = nums1
    nums1 = nums2
    nums2 = temp
  }

  const totalLength = nums1.length + nums2.length
  const medianPosition = Math.ceil(totalLength / 2)
  console.log({medianPosition})

  let pointer1 = Math.max(1, medianPosition - nums1.length)

  while(pointer1 <= medianPosition ) {
    const pointer2 = medianPosition - pointer1 // dynamic pointer

    if (pointer1 === nums1.length || pointer2 === 0 || pointer1 === 0) {
      break
    }

    if (nums1[pointer1] < nums2[pointer2 - 1]) {
      pointer1++
    } else if (nums2[pointer2] < nums1[pointer1 - 1]) {
      pointer1--
    } else {
      console.log({pointer2})
      break;
    }
  }

  return {pointer1, nums1, nums2}
}