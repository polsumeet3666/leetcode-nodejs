// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  return height(root);
};
function height (node) {
  if (node == null) return 0;
  else {
    const lh = height(node.left);
    const rh = height(node.right);
    if (lh > rh) return lh + 1;
    else return rh + 1;
  }
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
n1.left = new TreeNode(-1, null, null);
n3.right = new TreeNode(4, null, null)

console.log(maxDepth(head));
