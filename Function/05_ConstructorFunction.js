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
const person2 = new Person();

console.log(person1);
console.log(person2);