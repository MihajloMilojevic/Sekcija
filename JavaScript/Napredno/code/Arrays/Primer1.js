/////////////// CONSTRUCTOR ///////////////

console.log(Array(3));
// [ undefined, undefined, undefined ]
console.log(new Array(1, 2, 3, 4, 5));
// [ 1, 2, 3, 4, 5 ]

/////////////// ISARRAY ///////////////

console.log(Array.isArray([1, 2, 3]));
// true
console.log(Array.isArray("Hello"));
// false

/////////////// FROM ///////////////

console.log(Array.from([1, 2, 3]));
// [ 1, 2, 3 ]
console.log(Array.from("Hello"));
// [ 'H', 'e', 'l', 'l', 'o' ]

/////////////// PUSH ///////////////
var arr = [1, 2, 3];
console.log(arr);
// [ 1, 2, 3 ]
arr.push(4);
console.log(arr);
// [ 1, 2, 3, 4 ]

/////////////// POP ///////////////
var arr = [1, 2, 3];
console.log(arr);
// [ 1, 2, 3 ]
arr.pop();
console.log(arr);
// [ 1, 2 ]

/////////////// UNSHIFT ///////////////
var arr = [1, 2, 3];
console.log(arr);
// [ 1, 2, 3 ]
arr.unshift(4);
console.log(arr);
// [ 4, 1, 2, 3 ]

/////////////// SHIFT ///////////////
var arr = [1, 2, 3];
console.log(arr);
// [ 1, 2, 3 ]
arr.shift();
console.log(arr);
// [ 2, 3 ]

/////////////// SORT ///////////////
var arr = [4, 3, 2, 5, 1];
console.log(arr);
// [ 4, 3, 2, 5, 1 ]
arr.sort();
console.log(arr);
// [ 1, 2, 3, 4, 5 ]

var arr = [
    {value: 4}, 
    {value: 3}, 
    {value: 2}, 
    {value: 5}, 
    {value: 1}
]
arr.sort((a, b) => a.value > b.value ? 1 : -1);
console.log(arr);
// [
//     { value: 1 },
//     { value: 2 },
//     { value: 3 },
//     { value: 4 },
//     { value: 5 }
// ]

/////////////// REVERSE ///////////////
var arr = [ 1, 2, 3, 4, 5 ];
console.log(arr);
// [ 1, 2, 3, 4, 5 ]
arr.reverse();
console.log(arr);
// [ 5, 4, 3, 2, 1 ]

/////////////// REDUCE ///////////////

console.log([1, 2, 3, 4, 5].reduce((total, currentValue, currentIndex, array) => total + currentValue, 0));
// 15
console.log([1, 2, 3, 4, 5].reduce((total, currentValue, currentIndex, array) => total * currentValue, 1));
// 120

/////////////// MAP ///////////////

console.log([1, 2, 3, 4, 5].map((currentValue, currentIndex, array) => currentValue * 2));
// [ 2, 4, 6, 8, 10 ]
console.log([1, 2, 3, 4, 5].map((currentValue, currentIndex, array) => currentValue + currentIndex));
// [ 1, 3, 5, 7, 9 ]

/////////////// FILTER ///////////////

console.log([1, 2, 3, 4, 5].filter((currentValue, currentIndex, array) => currentValue % 2 == 0));
// [ 2, 4 ]
console.log([1, 2, 3, 4, 5].filter((currentValue, currentIndex, array) => currentIndex + currentValue > 5));
// [ 4, 5 ]

/////////////// FOREACH ///////////////

[1, 2, 3, 4, 5].forEach((value, index, array) => console.log(value, index));
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

/////////////// JOIN ///////////////

console.log(["C", "C++", "C#", "Java", "JavaScript", "Python"].join(", "));
// "C, C++, C#, Java, JavaScript, Python"
console.log([ "H", "e", "l", "l", "o" ].join(""));
// "Hello"

/////////////// FIND ///////////////

var arr = [
    {value: 4}, 
    {value: 3}, 
    {value: 2}, 
    {value: 5}, 
    {value: 1}
]
console.log(arr.find((item, index) => item.value === 5));
// { value: 5 }

/////////////// FINDINDEX ///////////////

var arr = [
    {value: 4}, 
    {value: 3}, 
    {value: 2}, 
    {value: 5}, 
    {value: 1}
]
console.log(arr.findIndex((item, index) => item.value === 5));
// 3

/////////////// EVERY ///////////////

console.log([1, 2, 3, 4, 5].every((value, index, array) => value % 2 === 0));
// false
console.log([1, 2, 3, 4, 5].every((value, index, array) => value > 0));
// true

/////////////// SOME ///////////////

console.log([1, 3, 5].some((value, index, array) => value % 2 === 0));
// false
console.log([-1, 1, 2, 3, 4, 5].some((value, index, array) => value > 0));
// true