/*
    [23, 31, 312, 12, 2, 321, 42];
    quickSort([23, 31, 312, 12, 2, 321, 42],left = 0,right = 6)
    {
        pivotIndex = partition([23, 31, 312, 12, 2, 321, 42] , left = 0,right = 6)
        {
            pivot = array[6] => 42
            i = 0 - 1 => -1 // esa index valid

            for( j = 0 ; j < 6 ; j++)
            {
                23 < 42 true 
                if(array[j] < pivot)
                {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
      }
    }
*/

// ======================== without built in =========================

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left >= right) {
//     return;
//   }
//   // partition the array around pivot
//   const pivotIndex = partition(arr, left, right);

//   // recursively sort the two array
//   quickSort(arr, left, pivotIndex - 1);
//   quickSort(arr, pivotIndex + 1, right);
// }

// function partition(arr, left, right) {
//   const pivot = arr[right]; // pick the last element as the pivot element

//   let i = left - 1; // index of the smaller element

//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       // swap
//       const temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }

//   const temp = arr[i + 1];
//   arr[i + 1] = arr[right];
//   arr[right] = temp;

//   return i + 1;
// }

// let array = [23, 31, 312, 12, 2, 321, 42];

// quickSort(array);

// console.log(array);

// ================== with built in function =======================
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
let array = [23, 31, 312, 12, 2, 321, 42];

console.log(quickSort(array));
