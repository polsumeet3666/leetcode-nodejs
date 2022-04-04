// https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const s = []
  let cur = root
  const result = []
  if (root == null) return []

  while (cur != null || s.length > 0) {
    // console.log(temp.val);
    while (cur != null) {
      result.push(cur.val)
      s.push(cur)
      cur = cur.left
    }
    const temp = s.pop()
    cur = temp.right
  }
  return result
}

function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const n2 = new TreeNode(2, null, null)
const n1 = new TreeNode(1, null, null)
const n3 = new TreeNode(3, null, null)
const head = n2
n2.left = n1
n2.right = n3

console.log(preorderTraversal(head))
