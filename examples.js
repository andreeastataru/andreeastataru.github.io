console.info("page loaded"); //printeaza in consola
console.debug(2 + 3); // intre paranteze expresie pe care o printeaza in consola
console.warn(2 * (3 + 1));

var employed = false; // boolean
var age = 24; // number
var name = "First Last"; //string
//console.error(employed);

var user = "Andreea";
console.info(user);
user = user + " " + "Tataru"; //variabila user va lua o alta valoare ( inainte de egal )
//partea dreapta hotaraste ce vafi cel din stanga// plus e concatnare
console.info(user);
var user = "3";
user = user + 5; //35

//Obiecte

var skills = ["js", "css", "html"]; //lista

var person = {
  employed: true,
  age: 29, //person.age
}; //json

document.getElementById("el");

console.info(typeof name); //string
console.info(typeof skills); //object
console.info(typeof document.getElementById); //function
