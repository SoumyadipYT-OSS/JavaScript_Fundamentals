// getElementsByTagName() method
// this method returns a collection of all elements in the document with the specified tag name, as a NodeList object.

let heading = document.getElementsByTagName('h1');
console.log(heading);


let msg = document.getElementsByClassName("message");
console.log(msg);


// querySelectorAll() method
// this method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.
let divPart = document.querySelectorAll("div");
console.log(divPart);


let cont = document.getElementById("container");
let msg1 = cont.querySelectorAll(".message");
console.log(msg1);