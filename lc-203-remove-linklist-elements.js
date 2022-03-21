// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function (head, val) {
   let t = head;
   let pt = null;
   while (t != null) {
     if (t.val == val && t == head) {
       head = head.next;
       pt = t;
       t = t.next;
     } else if (t.val == val && t.next == null) {
       pt.next = null;
       return head;
     } else if (t.val == val) {
       pt.next = t.next;
       t = t.next;
     } else {
       pt = t;
       t = t.next;
     }
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
let l = generateInput([]);
print(removeElements(l,2));