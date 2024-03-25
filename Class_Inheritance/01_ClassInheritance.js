class Person {
    constructor(name) {
        this._name = name;
    } greet() {
        console.log(`Hello, my name is ${this._name}`);
    }
}

class Student extends Person {
    method1() {
        console.log("Learning JavaScript is fun!");
    }
}


const s1 = new Student("Soumyadip");
s1.greet(); // Outputs: Hello, my name is Soumyadip
s1.method1(); // Outputs: Learning JavaScript is fun!