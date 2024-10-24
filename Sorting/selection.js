const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowestValue = array[i];
    let indexOfLowesetValue = i;

    // min
    for (let j = i; j < array.length; j++) {
      if (array[j] < lowestValue) {
        lowestValue = array[j];
        indexOfLowesetValue = j;
      }
    }

    // swap
    let temp = array[i];
    array[i] = array[indexOfLowesetValue];
    array[indexOfLowesetValue] = temp;
  }
  return array;
};

console.log(selectionSort([29, 10, 14, 37, 14]));

// let array = [29, 10, 14, 37, 14];

// min = array[0]; // min

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }

// console.log(min);

// let a = 10;
// let b = 20;

// let temp = a;
// a = b;
// b = temp;

// console.log(a + " " + b);
