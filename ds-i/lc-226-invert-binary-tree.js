// https://leetcode.com/problems/invert-binary-tree/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  return invert(root);
};

function invert (node) {
  if (node == null) return node;

  const left = invert(node.left);
  const right = invert(node.right);
  node.left = right;
  node.right = left;

  return node;
}
function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const n2 = new TreeNode(2, null, null)
const n1 = new TreeNode(1, null, null)
const n3 = new TreeNode(3, null, null)
const root = n2
n2.left = n1
n2.right = n3
n1.left = new TreeNode(-1, null, null);
n3.right = new TreeNode(4, null, null)

console.log(invertTree(root));
