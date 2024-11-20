/*
What is Data Structure ?
Way of organizing and storing data

Example :
    Array
    Stack
    Queue
    Linklist
    Set
    Map
    Binary Tree
    Graph

Complexity :
1 : Space comp
2 : Time comp



Time complexity analysis : 

Best, worst and average case analysis.

Algorithm : step by step work flow to perform a task.

*/

// Arti - JS - 10
let artiJs10 = [10, 20, 30, 40, 50, 60,70];
let target = 70;

function Linearsearching() {
  for (let i = 0; i < artiJs10.length; i++) {
    if (target == artiJs10[i]) {
      return i;
    }
  }
  return -1;
}

/*
Time complexity : 
worse case :  n + 1 => n
best case : 1
avg case : n/2 => n  
*/
/*
Step 1 : create an array in which you want to search an element.
Step 2 : take target element.
Step 3 : create a function : Linearsearching
    step 1 : loop 
            1 : starting : 0
            2 : condition : artiJs10.length
            3 : flow : ++
            
            if target == artiJs10[i] 
                return i // index
    step 2 : if elemet not found : 
            return -1
step 4 : call the function
*/
