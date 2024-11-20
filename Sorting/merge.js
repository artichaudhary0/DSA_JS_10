function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = new Array();
  const right = new Array(arr.length - mid);

  // fill the left and right array manually

  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }

  for (let i = mid; i < arr.length; i++) {
    right[i - mid] = arr[i];
  }

  // recursively sort both array
  const sortLeft = mergeSort(left);
  const sortRight = mergeSort(right);

  return merge(sortLeft, sortRight);
}

function merge(left, right) {
  const result = new Array(left.length + right.length);

  let i = 0,
    j = 0,
    k = 0;

  // merge the two array
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      // pointer manually checking each value
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }

  // remaining value copy to result left
  while (i < left.length) {
    result[k++] = left[i++];
  }

  // remaining value copy to result right
  while (j < right.length) {
    result[k++] = right[j++];
  }

  return result;
}

let array = [23, 31, 312, 12, 2, 321, 42];
const sortedArray = mergeSort(array);

console.log(sortedArray);
