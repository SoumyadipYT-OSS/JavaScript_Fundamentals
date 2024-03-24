/*
    In JavaScript, a callback is a function passed into another function as an argument to 
    be executed later.

    A callback function is a function that is passed as an argument to another function,
    - It is used to invoke the function that is passed as an argument.
*/

function display(res) {
    console.log(res);
}

function add(n1, n2, myCallback) {
    let sum = n1 + n2;
    myCallback(sum);
}

add(10, 20, display);  // here we add display function as a callback function