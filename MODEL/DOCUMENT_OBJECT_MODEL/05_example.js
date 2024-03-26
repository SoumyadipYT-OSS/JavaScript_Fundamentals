// createElement()

let div = document.createElement("div");  // creates a new div element
div.innerHTML = "<p>JavaScript is fun!</p>";
document.body.appendChild(div); // appends the div element to the body. This will add the div element to the end of the body.
div.id = "title";
div.className = "title";
console.log(div);