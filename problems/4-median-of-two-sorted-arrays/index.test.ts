import {findMedianSortedArrays} from './index'
import {expect} from 'chai'

describe.only('find median sorted arrays', () => {
  it('check pointer', () => {
    const array1 = [1, 2, 3, 4, 5]
    const array2 = [5, 6, 7, 8, 9]

    console.log(findMedianSortedArrays(array1, array2))
  })
})
