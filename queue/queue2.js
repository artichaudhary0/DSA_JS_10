// Stack using two queues

/*
Stack : push , pop [10,20,30,40] => pop 40
queue : enqueue , dequeue=>shift (FIFO) [10,20,30,40] , pop => 10
*/

class StackUsingTwoQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  // push an element onto the stack
  push(x) {
    this.queue1.push(x);
  }

  // pop an element from the stack
  pop() {
    // move all the elements from queue1 to queue2, expect last one

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift()); // [10,20,30] // swap [30,20,10]
    }

    /*
        q1 = [10,20,30,40] ,q2 = []  target 40 , shift 10 , pop 40 (can not use pop operation)

            while 4 > 1 true
                loop1 :   q1.shift() => 10 , q1 [20,30,40]
                          q2.push(10) [10]
                loop2 : while 3 > 1 true   
                          q1.shift() => 20 , q1 [30,40]
                          q2.push(20) [10,20]          
                loop3 : while 2 > 1 true   
                          q1.shift() => 30 , q1 [40]
                          q2.push(30) [10,20,30]   
                loop1 : while 1 > 1  false 
                            
                          q1 = [40]
                          q2 = [10,20,30]

        poppedElemet : q1.shift() , 40 
            q1 = [],
            q2 = [10,20,30]  
            
        target : q2 = [] , q1 = [10,20,30]

        swap : 
            [q1,q2] = [q2,q1]

            q1 = [10,20,30]
            q2 = []
    
    */

    // The last element of queue1 is the element to pop
    const poppedElement = this.queue1.shift();
    // swap
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return poppedElement;
  }

  peek() {
    // move all the elements from queue1 to queue2, expect last one

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift()); // [10,20,30] // swap [30,20,10]
    }

    // the last element of q1 is the top element
    let topElement = this.queue1[0];

    // move the element back to q1
    this.queue2.push(this.queue1.shift());

    // swap
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return topElement;
  }

  empty() {
    return this.queue1.length === 0;
  }
}

let stack = new StackUsingTwoQueue();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);

console.log(stack.empty());
