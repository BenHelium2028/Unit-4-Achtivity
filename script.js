//boolean for wacky mode
let wackyMode = false;

/*
NEW JS FUNTION:
document.querySelector();
lets you select an html element and store the refrence in a variable for js
*/

const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("description");
const toggleBtn = document.querySelector("#toggle");

//JS can now change atributes and properties
heading.textContent = "The Mostest Increable Website (Now with Javascript)"
heading.style.color = "white";