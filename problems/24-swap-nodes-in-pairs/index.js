/* 
  Given a linked list, swap every two adjacent nodes and return its head.
  You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

const {ListNode} = require('./utils')

function swapPairs(head) {
  if (head && head.next) {
    const nextNode = head.next
    const newHead = new ListNode(nextNode.val)
    newHead.next = new ListNode(head.val)
    newHead.next.next = swapPairs(nextNode.next)
    return newHead
  }

  return head
}

module.exports = swapPairs
