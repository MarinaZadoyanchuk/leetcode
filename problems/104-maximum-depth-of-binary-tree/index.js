/* 
  Given a binary tree, find its maximum depth.
  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  A leaf is a node with no children.
*/

// tail recursion
// https://leetcode.com/explore/learn/card/recursion-i/256/complexity-analysis/2374/
function maxDepth1(root, depth = 0) {
    if (!root) {
        return depth
    }
    
    return Math.max(maxDepth1(root.right, depth + 1), maxDepth1(root.left, depth + 1))
}

function maxDepth2(root) {
  if (!root) {
      return 0
  }

  return Math.max(maxDepth2(root.right), maxDepth2(root.left)) + 1
}

module.exports = {maxDepth1, maxDepth2}