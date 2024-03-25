class Person {
    constructor(fN, lN) {
        this.fN = fN;
        this.lN = lN;
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