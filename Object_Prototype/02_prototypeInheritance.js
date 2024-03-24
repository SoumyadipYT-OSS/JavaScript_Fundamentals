function Person (fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.gender = "Male";

const person1 = new Person("Soumyadip", "Majumder");
const person2 = new Person("Bill", "Gates");

console.log(person1);
console.log(person2);


Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1.getFullName());
console.log(person2.getFullName());