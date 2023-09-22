//User profile
//Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
//Store the information and then showcase it in the console. 
//Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

var userName= prompt ("Escribe tu nombre")
var edad= prompt ("Escribe tu edad")
const stringMovies = prompt("Cuáles son tus peliculas favoritas? escribe una lista separada por coma");
const arrayMovies = stringMovies.split(",")
console.log (arrayMovies)
console.log (userName)
console.log (edad)