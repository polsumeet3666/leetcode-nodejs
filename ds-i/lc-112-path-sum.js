// https://leetcode.com/problems/path-sum/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  let hasPath = false;
  const subSum = targetSum - root.val;

  if (subSum === 0 && root.left == null && root.right == null) {
    hasPath = true;
    return hasPath;
  }

  if (root.left != null) {
    hasPath = hasPath || hasPathSum(root.left, subSum);
  }

  if (root.right != null) {
    hasPath = hasPath || hasPathSum(root.right, subSum);
  }

  return hasPath;
};

function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const n2 = new TreeNode(2, null, null)
const n1 = new TreeNode(1, null, null)
const n3 = new TreeNode(3, null, null)
const root = n1
n1.left = n2
n1.right = n3

console.log(hasPathSum(root, 4));
