//Highest number
//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.


numero = prompt('Introduce una lista de números separados por una ","')
const arrayNumbers = numero.split(",")
console.log(Math.max(...arrayNumbers));
