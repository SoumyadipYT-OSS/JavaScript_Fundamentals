/*
    Constructor function is similar as a regular function but is is 
    good practice to capitalize the first letter of your function.

    Constructor function is used to create multiple objects with the same structure.
*/

function Person() {
    this.firstName = "Soumyadip",
    this.lastName = "Majumder"
}

const person1 = new Person();
const person2 = new Person("Bill", "Gates");    // This will not work as we have not passed any parameter in the constructor function

console.log(person1);
console.log(person2);

person1.age = 30;   // Adding new property to the object
person2.age = 68;   // Adding new property to the object
console.log(person1);
console.log(person2);

person2.greet = function() {
    console.log("Hello, " + person1.firstName + " " + person1.lastName);
}
console.log(person2);
person2.greet();    // This will not work as greet function is not defined in the constructor function