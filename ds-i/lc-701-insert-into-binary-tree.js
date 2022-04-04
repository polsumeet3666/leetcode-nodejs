// https://leetcode.com/problems/insert-into-a-binary-search-tree/
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val);
    return root;
  }
  let cur = root;
  while (true) {
    if (cur.val < val && cur.right != null) {
      cur = cur.right;
    } else if (cur.val < val && cur.right == null) {
      cur.right = new TreeNode(val);
      break;
    } else if (cur.val > val && cur.left != null) {
      cur = cur.left;
    } else if (cur.val > val && cur.left == null) {
      cur.left = new TreeNode(val);
      break;
    }
  }

  return root;
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

console.log(insertIntoBST(root,5));

