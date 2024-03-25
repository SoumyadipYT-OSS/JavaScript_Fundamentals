class Person {
    constructor(fN, LN) {
        this.fN = fN;
        this.LN = LN;
    }
    #fullName() {
        return `${this.fN} ${this.LN}`;
    }
    display() {
        console.log(this.#fullName());
    }
}

const person1 = new Person('Soumyadip', 'Majumder');
person1.display();