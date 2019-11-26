function ListNode(val) {
  this.val = val
  this.next = null
}

function getListByArray(array) {
  if (array.length <= 0) {
    return null
  }

  const root = new ListNode(array[0])
  let current = root
  let i = 1
  while(i < array.length) {
    current.next = new ListNode(array[i])
    current = current.next
    i++
  }

  return root
}

const areListsEqual = (list1, list2) => {
  let current1 = list1
  let current2 = list2

  while(current1 || current2) {
    if (current1.val === current2.val) {
      current1 = current1.next
      current2 = current2.next
      continue;
    } else {
      return false
    }
  }

  return true
}

module.exports = {getListByArray, ListNode, areListsEqual}