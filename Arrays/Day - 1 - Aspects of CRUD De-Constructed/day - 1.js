// CRUD : Create , read , update , delete.

// array
// let array = [];
// console.log(array);

// // array
// let array2 = new Array();
// console.log(array2);

// // insertion of value into array : create
// array[0] = 10
// console.log(array);

// array2.push(10)
// console.log(array2);

// let n = 3;

// let array = [];

// const input = document.getElementById("input-text");
// const button = document.getElementById("button");
// let i = 0;

// button.addEventListener("click", () => {
//   if (i < n) {
//     array[i] = input.value;
//     console.log(array);
//     i++;
//   }
// });

// /*
// T = 4 => const  O(1)
// space : O(n)
// */

// console.log(array);

// Read :

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let array2 = [];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// function forEach() {
//   for (let i = 0; i < array.length; i++) {
//     array2[i] = array[i];
//     // array2.push(array[i])
//   }
//   return array2;
// }

// /*
// S => n => O(n)
// T => n + 1 => O(n)
// */

// console.log(forEach());

// for...of
// for (let i of array) {
//   console.log(i);
// }

// array.forEach((i) => console.log(i));

// Upadte  : specific value update

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let index = 9;

// update
// array[index] = 1000;

// console.log(array);

// delete an element from an array by shifting all the elements

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let index = 5;

for (let i = index; i < array.length; i++) {
  array[i] = array[i + 1]; // update
}
array.length = array.length - 1;
console.log(array);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for (let i = 0; i < array.length-1; i++) {
//   array[i] = array[i + 1];
//   console.log(array[i])
// }
