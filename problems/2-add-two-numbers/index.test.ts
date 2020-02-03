import {addTwoNumbers, listToNumber, numberToList} from './index'
import ListNode from '../types/list-node'
import {expect} from 'chai'

describe.only('Add two numbers', () => {
  it('number to list', () => {
    expect(numberToList(0)).to.eql(new ListNode(0))
    const res = new ListNode(2)
    res.next = new ListNode(1)
    expect(numberToList(12)).to.eql(res)
  })

  it('list to number', () => {
    expect(listToNumber(numberToList(0))).to.eql(0)
    expect(listToNumber(numberToList(12))).to.eql(12)
  })

  it.only('add two numbers', () => {
    expect(addTwoNumbers(numberToList(0), numberToList(0))).to.eql(numberToList(0))
    expect(addTwoNumbers(numberToList(56), numberToList(67))).to.eql(numberToList(123))
    expect(addTwoNumbers(numberToList(465), numberToList(24))).to.eql(numberToList(489))
    expect(addTwoNumbers(numberToList(3), numberToList(9))).to.eql(numberToList(12))
    expect(addTwoNumbers(numberToList(0), numberToList(12))).to.eql(numberToList(12))
  })
})