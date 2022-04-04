// https://leetcode.com/problems/symmetric-tree/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};
function isMirror (node1, node2) {
  if (node1 == null && node2 == null) return true;

  if (node1 != null && node2 != null && node1.val === node2.val) {
    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );
  }

  return false;
}

function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
root.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));

console.log(isSymmetric(root));
