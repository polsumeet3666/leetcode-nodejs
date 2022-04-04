// https://leetcode.com/problems/validate-binary-search-tree/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  return isBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function isBSTUtil (node, min, max) {
  if (node == null) return true;

  if (node.val < min || node.val > max) return false;

  return (
    isBSTUtil(node.left, min, node.val - 1) &&
    isBSTUtil(node.right, node.val + 1, max)
  );
}