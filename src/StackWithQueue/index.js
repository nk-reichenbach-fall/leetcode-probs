var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.splice(0, 0, x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.stack.splice(0, 1);
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

/**
 * Implement the MyStack class:
 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 */

const stack_one = new MyStack();
const stack_two = new MyStack();

stack_one.push(5);
stack_one.push(4);
stack_one.push(3);
stack_one.push(2);

stack_two.push(5);
stack_two.push(4);
stack_two.push(3);

console.log("Stack one: ", stack_one);

stack_one.pop();

console.log("Top of stack after one pop: ", stack_one.top());

stack_one.pop();
stack_one.pop();
console.log("Stack one after 3 pop: ", stack_one);
console.log("Is stack_one empty: ", stack_one.empty());

console.log("Stack two: ", stack_two);
stack_two.pop();
console.log("Stack two after 1 pop: ", stack_two);
