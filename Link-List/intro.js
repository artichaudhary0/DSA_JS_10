// Introduction to singly linked list
// Linked list traversal

class List {
  // parametrized constructor
  constructor(data) {
    // head
    this.head = {
      value: data,
      next: null,
    };
    // item 1.
    this.tail = this.head;
  }

  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
  }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);

console.log(list.tail);
