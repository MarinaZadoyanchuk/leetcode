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

function areListsEqual(list1, list2) {
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


function memoize(func, getCacheKey) {
  const cache = {}

  function memoized() {
    const key = getCacheKey ? getCacheKey(arguments) : arguments[0]
    if (cache.hasOwnProperty(key)) {
      return cache[key]
    }

    const result = func.apply(this, arguments)
    cache[key] = result
    
    return result
  }

  return memoized
}

module.exports = {getListByArray, ListNode, areListsEqual, memoize}