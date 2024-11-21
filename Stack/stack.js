// Last in first out : LIFO

// recursive function Stack :
function factorial(n) {
  if (n < 0) return;
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

// console.log(factorial(5));

/*
rerursive cycle 1 : 
    fcat(5)
        if(5 < 0) false
        if(5 == 0 || 5 == 1) false
            else 
                return 5*fact(4) 
                push into stack

rerursive cycle 2 : 
    fact(4) 
        if( 4 < 0 ) false
        if(4 == 0 || 4 == 1) false
            else 
                return 4 * fact(3)
                push into stack

rerursive cycle 3 :
    fact(3)
        if(3 < 0 ) false
        if(3 == 0 || 3 == 1) false
            else 
                return 3 * fact(2)
                push into stack  

rerursive cycle 4 :
    fact(2)
        if(2 < 0)
            false
        if(2 == 0 || 2 == 1)
            false
        else
            retrun 2*fact(1)
            push into stack

rerursive cycle 5 :    
    fact(1)
        if( 1 < 0 )
            false
        if(1== 0 || 1 == 1)
            return 1 
            push into 1           



stack push => 5*fact(4) => 4*fact(3) => 3 * fact(2) => 2*fact(1) => 1

LIFO (Last in First out)

pop => 
    step 1 : 1
    step 2 : 2*fact(1) => 2*1
    step 3 : 3*fact(2) => 3*2*1
    step 4 : 4*fact(3) => 4*3*2*1
    step 5 : 5*fact(4) => 5*4*3*2*1 => 120
*/

/*
PUSH : 
POP :
PEEK : 
isEmpty
*/

class Stack {
  constructor() {
    this.items = []; // initially empty
  }

  pushElement(element) {
    this.items.push(element);
  }

  popElement() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      return this.items.pop();
    }
  }

  peekElement() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.items);
stack.pushElement(10);
console.log(stack.isEmpty());
console.log(stack.items);
stack.pushElement(20);
console.log(stack.items);
stack.pushElement(30);
console.log(stack.items);
stack.pushElement(40);
console.log(stack.items);
stack.popElement();
console.log(stack.items);
stack.popElement();
console.log(stack.items);
stack.popElement();
console.log(stack.items);
stack.popElement();
console.log(stack.items);
console.log(stack.peekElement());
console.log(stack.isEmpty());
