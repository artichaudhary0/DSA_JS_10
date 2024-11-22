// array[index] = value

class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(element) {
    this.top++; // 1 2 3 4 5 ...
    this.items[this.top] = element;
  }

  pop() {
    if (this.top < 0) {
      console.log("Stack is underflow");
      return undefined;
    } else {
      let poppedElement = this.items[this.top];
      this.top--;
      return poppedElement;
    }
  }

  peek() {
    if (this.top < 0) {
      console.log("Stack is Empty");
      return undefined;
    }
    return this.items[this.top];
  }

  isEmpty() {
    return this.top < 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.pop());
