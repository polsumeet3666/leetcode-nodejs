// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const h = height(root);
  const result = [];
  for (let i = 1; i <= h; i++) {
    const temp = getCurrentLevelNode(root, i);
    result.push(temp);
  }
  // return getCurrentLevelNode(root,3);
  return result;
};

function getCurrentLevelNode (root, level) {
  if (root == null) return [];

  if (level === 1) return [root.val];
  else if (level > 1) {
    const a1 = getCurrentLevelNode(root.left, level - 1);
    const a2 = getCurrentLevelNode(root.right, level - 1);
    return [...a1, ...a2];
  }
}

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

console.log(levelOrder(head))
