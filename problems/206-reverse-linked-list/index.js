/* Reverse a singly linked list. */
const {ListNode} = require('../utils')

function reverseList(head, prev = null) {
  if (head) {
    const newNode = new ListNode(head.val)
    newNode.next = prev

    return reverseList(head.next, newNode)
  }

  return prev
}

module.exports = reverseList