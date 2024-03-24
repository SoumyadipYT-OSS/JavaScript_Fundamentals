function Person() {
    this.name = "Soumyadip Majumder";
}
Person.prototype.age = 25;

const person1 = new Person();

Person.prototype = { age: 30 };

const person2 = new Person();


console.log(person1);
console.log(person1.age);
console.log(person2);
console.log(person2.age);