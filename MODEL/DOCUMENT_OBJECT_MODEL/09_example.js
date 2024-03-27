let inputBox = document.getElementById("username")

// hasAttribute() method
// The hasAttribute() method checks whether an element has a particular attribute or not.
console.log(inputBox.hasAttribute("id"));
console.log(inputBox.hasAttribute("class"));

let title = document.getElementById("title");
title.className = "new";
console.log(title.classList);