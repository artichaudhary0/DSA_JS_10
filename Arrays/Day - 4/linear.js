// array of objects
let array = [
  { username: "Arti" },
  { username: "Singh" },
  { username: "Chaudhary" },
];

let result = (array, target) => {
  for (let name of array) { // for of
    if (name.username === target) {
      return true;
    }
  }

  return false;
};

console.log(result(array,"Singh"))
