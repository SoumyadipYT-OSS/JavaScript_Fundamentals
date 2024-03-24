function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.getFullName = function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
}


const person1 = new Person("Soumyadip", "Majumder");
const person2 = new Person("Bill", "Gates");

person1.getFullName();
person2.getFullName();