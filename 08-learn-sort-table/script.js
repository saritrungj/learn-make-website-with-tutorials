let fruits = ["pineapple", "orange", "banana", "coconut", "apple"];
console.log("Before sorting >>");
console.log(fruits);

fruits.sort();

console.log("After sorting >>");
console.log(fruits);

let numbers = [1, 3, 5, 6, 9, 11, 56, 74, 22, 12];
console.log("Before sorting >>");
console.log(numbers);

//ascending
numbers.sort((a, b) => {
  return a - b;
});

//descending
numbers.sort((a, b) => {
  return b - a;
});

console.log("After sorting >>");
console.log(numbers);

const people = [{name: "Sarit", age: 30, gpa: 3.0},
                {name: "Panupong", age:25, gpa: 3.5},
                {name: "Tanida", age: 52, gpa: 3.7},
                {name: "Phuriphat", age:26, gpa: 3.5}];

console.log("Before sorting >>");
console.log(people);

// people.sort((a, b) => {
//   return a.age - b.age;
// });

// people.sort((a, b) => {
//   return a.gpa - b.gpa;
// });

people.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log("After sorting >>");
console.log(people);