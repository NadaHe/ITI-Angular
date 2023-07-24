var fruits=['apple','strawberry','banana','orange','mango'];

// check that each item in the fruits array is a string
var isString = fruits.every(item => typeof item === 'string');
console.log(isString); // true

//test that there is some of the fruits array that starts with the letter 'a'
var isSome = fruits.some(item => item.startsWith('a'));
console.log(isSome); // true

//generate a new array with the items of the fruits array that start with the letter 'b' or 's'
var filteredArray = fruits.filter(item => item.startsWith('b') || item.startsWith('s'));
console.log(filteredArray); // ['strawberry','banana']

//generate a new array using for each item in the fruits array proceeded with the word 'I like'
var newArray = fruits.map(item => 'I like '+item);
console.log(newArray); // ['I like apple','I like strawberry','I like banana','I like orange','I like mango']

fruits.forEach(item => console.log('I like '+item)); // I like apple I like strawberry I like banana I like orange I like mango
