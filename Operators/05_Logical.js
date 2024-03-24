// Logical Operators

// Logical AND (&&)
let a;
let b;
a = true;
b = true;
console.log(a && b); // Output: true
a = true;
b = false;
console.log(a && b); // Output: false
a = false;
b = true;
console.log(a && b); // Output: false
a = false;
b = false;
console.log(a && b); // Output: false


// Logical OR (||)
let c;
let d;
c = true;
d = true;
console.log(c || d); // Output: true
c = true;
d = false;
console.log(c || d); // Output: true
c = false;
d = true;
console.log(c || d); // Output: true
c = false;
d = false;
console.log(c || d); // Output: false


// Logical NOT (!)
let e;
e = true;
console.log(!e); // Output: false
e = false;
console.log(!e); // Output: true


// Logical AND (&&) with Non-Boolean Operands
let f = 5;
let g = 3;
console.log(f && g); // Output: 3

// this works as binary value of 5 is 101 and 3 is 011