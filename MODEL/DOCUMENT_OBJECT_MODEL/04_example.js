let parent = document.querySelector(".title");

console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.childNodes);


// previousSibling
// previousSibling is a property of the Node interface. It returns the previous sibling of the specified node, including text nodes. If the node has no previous sibling, it returns null.
let second = document.querySelector(".second")
console.log(second.previousSibling);