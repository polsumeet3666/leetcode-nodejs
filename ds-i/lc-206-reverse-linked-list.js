// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let stack = [];
  let temp = head;
  while (temp != null) {
    stack.push(temp.val);
    temp = temp.next;
  }

  let newHead = null;
  temp = newHead;
  while (stack.length != 0) {
    let val = stack.pop();
    let node = new ListNode(val, null);
    if (newHead == null) {
      newHead = node;
      temp = node;
    } else {
      temp.next = node;
      temp = node;
    }
  }
  return newHead;
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


let l = generateInput([1,2,3,4,5]);
print(reverseList(l));