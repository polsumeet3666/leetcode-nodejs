// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
let result = [];
const postorderTraversal = function (root) {
  result = [];
  walk(root);
  return result;
};
function walk(node) {
  if (node == null) {
    return;
  }
  walk(node.left);
  walk(node.right);
  result.push(node.val);
}


function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const n2 = new TreeNode(2, null, null)
const n1 = new TreeNode(1, null, null)
const n3 = new TreeNode(3, null, null)
const head = n1;
n1.right = n2;
n2.left = n3;
console.log(postorderTraversal(head))
