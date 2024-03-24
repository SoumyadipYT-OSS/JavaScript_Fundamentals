// Anonymous functions

let sum = function (x,y) {
    return x + y;
}
console.log(sum(10, 20));

(
function () {
    console.log("JavaScript Programming");
}
)();  // IIFE (Immediately Invoked Function Expression); it is a function that is executed right after it is created