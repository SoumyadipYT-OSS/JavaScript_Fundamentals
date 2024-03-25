class Person {
    constructor(name) {
        this._name = name;
    } greet() {
        console.log(`Hello, my name is ${this._name}`);
    }
}

class Student extends Person {
    constructor(name) {
        console.log("Student class constructor");
        super(name);
    }
    method1() {
        console.log("Learning JavaScript is fun!");
    }
}


const s1 = new Student("Soumyadip");
// to access all the methods in Student class
s1.greet();