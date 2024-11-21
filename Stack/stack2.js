/*
Balanced parenthesis : 
balac : {[(adfgdfg)]}
unba : ){][}

Reverse string
*/
function isBalanced(expresssion) {
  /*
        {[()}

        stack = []
        loop 1 : 
            {
            if({) true
                    stack.push({)
        loop 2 :
            [
            if([) true
                    stack.push([)
                    
        loop 3 : 
            (
            if(() true
                    stack.push(()            


        loop 4 :
            char === )
            if()) false
            else if()) true
                if(stack.length == 0) false
                top = (    
                if( char === )   && top( !== "("  ) false 

        loop 5 : 
            char   = }
            if(fasle)
            else if(true)
                if(false)
            top [
            if( } ===  && [ !== )
            } === "}" && [ !== "{" true 
                    stack push : {  [  (
                    stack pop : top (
    */

  let stack = [];
  for (let char of expresssion) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false;
      }

      let top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Reverse a string :
function reverseString(str) {
  let stack = [];

  for (let char of str) {
    stack.push(char);
  }

  let reverser = "";
  while (stack.length > 0) {
    reverser += stack.pop();
  }
  return reverser;
}
console.log(reverseString("sjhvisdvfyhsdv"));
