// https://leetcode.com/problems/implement-queue-using-stacks//


var MyQueue = function() {
    this.stack = [];
    this.temp = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.stack.length != 0 ){
      this.temp.push(this.stack.pop());
    }
    this.stack.push(x);
    while (this.temp.length != 0) {
      this.stack.push(this.temp.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj.peek());
console.log(obj.empty());
console.log(obj.pop());
console.log(obj.peek());
