// https://leetcode.com/problems/search-in-a-binary-search-tree/
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  let cur = root;
  while (cur != null) {
    if (cur.val === val) {
      return cur;
    } else if (cur.val > val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  return cur;
};

function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7)
);

console.log(searchBST(root, 2));