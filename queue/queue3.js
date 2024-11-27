// Queues using two stacks :

class QueuesUsingTwoStack {
  constructor() {
    this.stacks1 = [];
    this.stacks2 = [];
  }

  // enqueue
  enqueue(element) {
    // push the element into stack1
    this.stacks1.push(element);
  }

  dequeue() {
    // if stack2 is empty ? move the elements from stack1 to stack2
    if (this.stacks2.length === 0) {
      while (this.stacks1.length > 0) {
        this.stacks2.push(this.stacks1.pop());
      }
    }

    /*
        stack1 = [10,20,30]  // 3
        stack2 = empty = []
            if(stack2.length === 0) true
              loop1 : 3 > 0 true
                stack2(30)   [30]
                stack1 [10,20]
              loop 2 :  2 > 0 true
                stack2(20) [30,20]
                stack1 [10]
              loop 3 : 1 > 0
                stack2(10) [30,20,10]
                stack1 []
              loop 4 : 0 > 0 false
              exit the loop     

     */

    // if stack2 is still empty.
    if (this.stacks2.length === 0) {
      throw new Error("Queue is empty");
    }

    return this.stacks2.pop();
  }

  peek() {
    if (this.stacks2.length === 0) {
      while (this.stacks1.length > 0) {
        this.stacks2.push(this.stacks1.pop());
      }
    }

    if (this.stacks2.length === 0) {
      throw new Error("Queue is empty");
    }

    return this.stacks2[this.stacks2.length - 1];
  }
  empty() {
    return this.stacks1.length === 0;
  }
}
let stack = new QueuesUsingTwoStack();
stack.enqueue(10);
// stack.enqueue(20);
// stack.enqueue(30);
// stack.enqueue(40);

// console.log(stack.dequeue());
// console.log(stack.dequeue());
// console.log(stack.dequeue());
console.log(stack.empty());
// console.log(stack.dequeue());
