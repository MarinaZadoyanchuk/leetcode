/* 
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order and each of their nodes contain a single digit. 
    Add the two numbers and return it as a linked list.

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
*/

import ListNode from '../types/list-node'

export function addTwoNumbers(l1: ListNode<number>, l2: ListNode<number>): ListNode<number> {
  if (!l1 && !l2) {
    return null
  }

  let carry = 0
  let root = null
  let last = null

  while(l1 || l2 || carry) {
    let sum = carry
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    carry = Math.floor(sum / 10)

    if (!root) {
      last = root = new ListNode<number>(sum % 10)
    } else {
      last.next = new ListNode<number>(sum % 10)
      last = last.next
    }
  }

  return root
}
export function listToNumber(l1: ListNode<number>): number {
  let res = ''
  while(l1) {
    res = `${l1.val}${res}`
    l1 = l1.next
  }

  return +res
}

export function numberToList(n: number): ListNode<number> {
  let root = null
  let last = null

  ;`${n}`.split('').reverse().forEach((s) => {
    if (!root) {
      last = root = new ListNode<number>(Number(s));
    } else {
      last = last.next = new ListNode<number>(Number(s))
    }
  })

  return root
}