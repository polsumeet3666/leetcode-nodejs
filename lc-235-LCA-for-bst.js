// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let ppath = [];
let qpath = [];
const lowestCommonAncestor = function (root, p, q) {
  ppath = getPath(root, p);
  qpath = getPath(root, q);
  console.log(ppath,qpath)
  let i = 0;
  while (ppath[i] != undefined && qpath[i] != undefined && ppath[i].val === qpath[i].val ) {
    i++;
  }
  return ppath[--i];
};
function getPath(root, pp) {
  const result = [];
  let cur = root;
  while (true) {
    if (cur == null) {
      break;
    } else if (cur.val === pp.val) {
      result.push(cur);
      break;
    } else if (pp.val < cur.val) {
      result.push(cur);
      cur = cur.left;
    } else if (pp.val > cur.val) {
      result.push(cur);
      cur = cur.right;
    } else {
      break;
    }
  }
  return result;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


let n6 = new TreeNode(6);
let n2 = new TreeNode(2);
let n8 = new TreeNode(8);
let n0 = new TreeNode(0);
let n4 = new TreeNode(4);
let n7 = new TreeNode(7);
let n9 = new TreeNode(9);
let n3 = new TreeNode(3);
let n5 = new TreeNode(5);

n6.left = n2;
n6.right = n8;
n2.left = n0;
n2.right = n4;
n4.left = n3;
n4.right = n5;
n8.left = n7;
n8.right =n9;
// let n2 = new TreeNode(2,new TreeNode(1));
// console.log(lowestCommonAncestor(n6,n2,n8))
console.log(lowestCommonAncestor(n6,n2,n4))
// console.log(lowestCommonAncestor(n6,3,5))
