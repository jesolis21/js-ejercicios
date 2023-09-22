// Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let array = [1, [2, 3, [4, 5,[6,7]]]];

function flatten(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
 
const arr = [1, [2, 3, [4, 5,[6,7]]]];
 
const flattened = flatten(arr);
console.log(flattened);








