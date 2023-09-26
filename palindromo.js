//Palindrome
//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation).
// Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

var cadena = prompt('Introduzca un texto o palabra por favor');
cadena = cadena.toLowerCase().replace(/\s/g,"");
var reves = cadena.split("").reverse().join("");

function palindromo (cadena) {
    if(cadena == reves){
      alert('El texto o palabra introducido es un palindromo');
    }
    else{
      alert('El texto o palabra introducido NO es un palindromo');
    }
 }
palindromo (cadena);
