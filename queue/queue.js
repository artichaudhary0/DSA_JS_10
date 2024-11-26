/*
FIFO : FIRST IN FIRST OUT
*/

class Queue {
  constructor() {
    this.items = [];
  }
  // ENQUEUE : (ADD NEW ELEMEMT)
  enqueue(element) {
    this.items.push(element);
  }

  // DEQUEUE : (Remove first element)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let queue = new Queue();
console.log(queue.items);

queue.enqueue(10); // 1 item
queue.enqueue(20); // 2 item
queue.enqueue(30); // 3 item

// queue.dequeue();

console.log(queue.peek());
