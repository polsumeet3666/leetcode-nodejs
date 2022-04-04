// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

const findTarget = function (root, k) {
  let mySet = new Set();
  return inorder(root, k, mySet);
};

function inorder(node, k, mySet) {
  if (node == null) return false;
  mySet.add(node.val);
  if (mySet.has(k - node.val) && (k - node.val) != node.val) {
    return true;
  } else {
    return inorder(node.left, k, mySet) || inorder(node.right, k, mySet);
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const n2 = new TreeNode(2, null, null);
const n1 = new TreeNode(1, null, null);
const n3 = new TreeNode(3, null, null);
const head = n1;
n1.right = n2;
n2.left = n3;

console.log(findTarget(head, 6));
