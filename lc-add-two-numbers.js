/* *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val,next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)

}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

  let temp1 = l1;
  let temp2 = l2;
  let newList = [];
  let carry = false;
  while (temp1 != null && temp2 != null) {
    let sum = temp1.val + temp2.val + (carry ? 1 : 0);
    carry = false;
    if (sum > 9) {
      sum = sum % 10;
      carry = true;
    }

    // console.log(sum);
    newList.push(sum);
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  while (temp1 != null) {
    let sum = temp1.val + (carry ? 1 : 0);
    carry = false;
    if (sum > 9) {
      sum = sum % 10;
      carry = true;
    }

    // console.log(sum);
    newList.push(sum);
    temp1 = temp1.next;
  }
  if (temp1 == null && temp2 == null && carry) {
    carry = false;
    newList.push(1);
  }

  while (temp2 != null) {
    let sum = temp2.val + (carry ? 1 : 0);
    carry = false;
    if (sum > 9) {
      sum = sum % 10;
      carry = true;
    }

    // console.log(sum);
    newList.push(sum);
    temp2 = temp2.next;
  }
  if (temp2 == null && carry) {
    carry = false;
    newList.push(1);
  }

  let head = createLl(newList);
  printLl(head);

  return head;
};
(()=>{

  // // 342
  // let num1 = createLl([2,4,3]);
  // printLl(num1);
  // let num2 = createLl([5,6,9,]);
  // printLl(num2);
  // // 465

    let num1 = createLl([2,4,9]);
    printLl(num1);
    let num2 = createLl([5,6,4,9]);
    printLl(num2);

  addTwoNumbers(num1,num2);
})();

function createLl(nums) {
  let prev = null;
  let head = null;
  for (let i=0;i<nums.length;i++){
    let l = new ListNode(nums[i]);
    if (prev) {
      prev.next = l;
      prev = l ;
    }
    if (i ==0) {
      head = l;
      prev =l;
    }
  }
  return head;
}

function printLl(head) {
  let temp = head;
  let arr = [];
  while(temp!=  null){
    arr.push(temp.val);
    temp = temp.next;
  }
  console.log(arr.join())
}
