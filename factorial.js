//Factorial
//Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

var factorial = parseInt(prompt('Introduce el Numero a descomponer'))
var resultado = factorial;
for (var i = 1; i < factorial; i++) {
    console.log(i)
    resultado *= i
}
console.log("EL FACTORIAL ES "+resultado);
