import {twoSum} from './index'
import {expect} from 'chai'

describe.only('Two sum problem', () => {
  it('find sum indices', () => {
    expect(twoSum([1, 3, 3, 4, 5], 5)).to.eql([0, 3])
    expect(twoSum([3, 2, 4], 6)).to.eql([1, 2])
    expect(twoSum([-3, 4, 3, 90], 0)).to.eql([0, 2])
  })

  it('should be exception', () => {
    expect(() => twoSum([1, 2, 3, 4, 5], 10)).to.throw('Solution either does not exist or is not unique')
    expect(() => twoSum([], 10)).to.throw('Solution either does not exist or is not unique')
  })
})