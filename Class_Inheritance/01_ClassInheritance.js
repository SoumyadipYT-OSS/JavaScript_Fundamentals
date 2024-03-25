class Person {
    constructor(name) {
        this._name = name;
    } greet() {
        console.log(`Hello, my name is ${this._name}`);
    }
}

class Student extends Person {

}

const s1 = new Student("Soumyadip");
s1.greet(); // Outputs: Hello, my name is Soumyadip