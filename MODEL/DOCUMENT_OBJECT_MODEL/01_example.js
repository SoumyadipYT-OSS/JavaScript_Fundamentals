/*
    In JavaScript, Document Object Model (DOM) is an API, which helps in manipulating the HTML and XML documents.
    The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
*/

// getElementById returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
let msg = document.getElementById('message');
console.log(msg.innerHTML);

let msg1 = document.getElementById('message1');
console.log(msg1);


// getElementsByName returns a collection of all elements in the document with the specified name (the value of the name attribute), as a NodeList object.
let btn = document.getElementsByName("language");
console.log(btn);