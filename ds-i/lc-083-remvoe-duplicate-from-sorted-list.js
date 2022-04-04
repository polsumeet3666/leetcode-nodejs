// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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
 var deleteDuplicates = function (head) {
   let prev = head;
   let cur = prev ? prev.next : null;
   while (cur != null) {
     if (cur.val == prev.val) {
       prev.next = cur.next;
       cur = cur.next;
     } else {
       prev = cur;
       cur = cur.next;
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

// let l = generateInput([1,1,2,2,3,3]);
let l = generateInput([]);

print(deleteDuplicates(l));