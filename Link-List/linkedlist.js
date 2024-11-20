// data(value) next

// single node
class Node {
  // parameterized constructor
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  // default constructor
  constructor() {
    this.head = null;
  }

  // add node to the end
  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // created first node
      this.head = newNode;
    } else {
      // add second new node
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = newNode;
      }
      currentNode.next = newNode;
    }
  }

  // display all nodes
  display() {
    let current = this.head;
    const result = []; // store linked list data

    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join("->"));
  }
}

class LinkedListLength extends LinkedList {
  getLength() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

class LinkedListSearch extends LinkedList {
  search(target) {
    let current = this.head;

    while (current) {
      if (current.data === target) return true;
      current = current.next;
    }
    return false;
  }
}

class LinkedListRemove extends LinkedList {
  remove(value) {
    if (!this.head) return;

    // if the head node itself holds the value to be deleted
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.nextSibling.data !== value) {
      current = current.next;
    }

    // if value found then remove the node
    if (current.next) {
      current.next = current.next.next;
    }
  }
}

const listRemove = new LinkedListRemove();
listRemove.addNode(10);
listRemove.addNode(20);
listRemove.addNode(30);
listRemove.remove(20);
listRemove.display();

// const searchElement = new LinkedListSearch();

// searchElement.addNode(100);
// searchElement.addNode(200);

// console.log(searchElement.search(200));

// function reversedLinkedList(head) {
//   let previous = null;
//   let current = head;

//   while (current) {
//     let nextNode = current.next; // save the next node
//     current.next = previous; // reverse the pointer
//     previous = current; // move previous to current
//     current = nextNode; // move to next node
//   }
//   return previous;
// }

// const length = new LinkedListLength();
// length.addNode(100);
// // length.addNode(200);
// console.log("length : " + length.getLength());

// // testing
// const list = new LinkedList();
// list.addNode(10);
// list.addNode(20);
// list.addNode(30);
// list.addNode(40);
// list.display(); // 10-> 20->30->40

// let reverseHead = reversedLinkedList(list.head);

// let current = reverseHead;
// let reverseResult = [];
// while (current) {
//   reverseResult.push(current.data);
//   current = current.next;
// }

// console.log(reverseResult.join("->"));
