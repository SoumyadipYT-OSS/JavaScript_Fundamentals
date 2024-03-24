let number = null;
console.log(number);        // Output: null
console.log(typeof number);   // Output: object

// It is a bug in JavaScript that typeof null returns object. It should return null.


console.log(null == undefined); // Output: true