// JavaScript class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    favouriteFood(food) {
        this.food = food;
    }
}

const person1 = new Person("Soumyadip Majumder", 20);
const person2 = new Person("Bill Gates", 68);
console.log(person1);
console.log(person2);
console.log(person1.greet());
console.log(person2.greet());

person1.favouriteFood("Paneer Butter Masala");
person2.favouriteFood("Pizza and Chai");
console.log(person1);
console.log(person2);