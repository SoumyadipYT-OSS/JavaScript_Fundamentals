// In JavaScript, Object Destructuring is a way to extract properties from an object and bind them to variables.
// It can be useful when you want to pass an object to a function and only extract the properties you need.
// It can also be useful when you want to assign properties to variables with a different name.
// It is used to unpack values from arrays, or properties from objects, into distinct variables.


const person = {
    firstName: "Soumyadip",
    lastName: "Majumder",
    age: 20
}

let { firstName, lastName, age = 18 } = person;
console.log(age);