// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null;
  let temp1 = list1;
  let temp2 = list2;
  let temp3 = head;
  while (temp1 != null && temp2 != null) {
    if (temp1.val > temp2.val) {
      if (temp3) temp3.next = new ListNode(temp2.val);
      else temp3 = new ListNode(temp2.val);
      temp2 = temp2.next;
    } else {
      if (temp3) temp3.next = new ListNode(temp1.val);
      else temp3 = new ListNode(temp1.val);
      temp1 = temp1.next;
    }

    if (head == null) head = temp3;
    else temp3 = temp3.next;
  }

  while (temp1 != null) {
    if (temp3) temp3.next = new ListNode(temp1.val);
    else temp3 = new ListNode(temp1.val);
    temp1 = temp1.next;
    if (head == null) head = temp3;
    else temp3 = temp3.next;
  }

  while (temp2 != null) {
    if (temp3) temp3.next = new ListNode(temp2.val);
    else temp3 = new ListNode(temp2.val);
    temp2 = temp2.next;
    if (head == null) head = temp3;
    else temp3 = temp3.next;
  }

  return head;
};

 function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
 }
function generateInput(arr, pos=-1) {
  let nodes = [];
  for (let i = 0; i < arr.length; i++) {
    let n = new ListNode(arr[i]);
    nodes.push(n);
    if (i > 0) {
      nodes[i - 1].next = n;
    }
  }

  // attach loop
  if (pos > -1) {
    nodes[nodes.length - 1].next = nodes[pos];
  }
  return nodes[0];
}
function print(head) {
  let temp = head;
  let result = "";
  while (temp != null) {
    result += temp.val + ",";
    temp = temp.next;
  }
  console.log(result);
}
let l1 = generateInput([]);
let l2 = generateInput([0]);
print(l1);
print(l2);

print(mergeTwoLists(l1,l2));