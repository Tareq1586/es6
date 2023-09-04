// var numbers = [1, 2, 3];
// // var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6];
// var newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers);

// javascript object always points to a reference
// var numbers = [1, 2, 3];
// var a = numbers;
// a.push(4);
// console.log(numbers);

// exact copy of a number
// this is the power of a spread operator
// var numbers = [1, 2, 3];
// var a = [...numbers];
// a.push(4);
// console.log(numbers);

// cpying two arrays in a array
// var numbers1 = [1, 2, 3];
// var numbers2 = [4, 5, 6];
// var newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

// copying two objects in an object
// var myObj1 = {
//   x: 1,
//   y: 2,
// };
// var myObj2 = {
//   a: 1,
//   b: 2,
// };
// console.log({
//   ...myObj1, ...myObj2,
// });
