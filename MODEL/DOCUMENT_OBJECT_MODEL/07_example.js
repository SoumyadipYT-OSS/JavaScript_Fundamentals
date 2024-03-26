let menu = document.getElementById("menu");

// textContent: The textContent property of the Node interface represents the text content of the node and its descendants.
console.log(menu.textContent);

// innerText: The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
console.log(menu.innerText);