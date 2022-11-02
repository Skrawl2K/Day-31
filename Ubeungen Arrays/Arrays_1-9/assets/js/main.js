// const test = "bla"
// console.log(test);


const numbers = ["23", "54", "75"];
console.log(numbers);
// PUSH
numbers.push("2022", "2020", "1995", "1990", "2022");
console.log(numbers);
// UNSHIFT
numbers.unshift("1959", "1960", "1994", "2012", "2017")
console.log(numbers);
// POP
numbers.pop().concat(numbers.pop());
console.log(numbers);
// SHIFT
numbers.shift().concat(numbers.shift());
console.log(numbers);