// https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function (head) {


   let fast = (head ? head.next : null);
   let slow = head;
   while (fast != null && slow != null) {
     if (fast == slow) return true;
     else {
       slow = slow.next;
       fast = fast.next ? fast.next.next : null;
     }
   }
   return false;
 };

 function ListNode(val) {
   this.val = val;
   this.next = null;
 }
 function generateInput(arr, pos) {
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

 /** !IMPORTANT CYCLE LOOP WILL NOT END */
 function print(head) {
   let temp = head;
   let result = "";
   while (temp != null) {
     result += temp.val + ",";
     temp = temp.next;
   }
   console.log(result);
 }
//  let head = [3, 2, 0, -4],
//    pos = 1;
let head = [1,1,1,1],
pos = -1;

 let ll = generateInput(head, pos);

 // print(ll);
 console.log(hasCycle(ll));