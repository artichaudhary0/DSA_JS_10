function searching(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(searching([12, 312, 321, 3, 213, 23],23))

/*
space complexity = O(1) // const
time complexity : 0(n)
best : 0(1)
worse : 0(n)
avg : 0(n/2) => 1/2 const = k => kn => 0(n)
*/
