class Person1 {
    constructor(fN, lN) {
        this.fN = fN;
        this.lN = lN;
    }
    static #fullName(x) {
        return x.fN + " " + x.lN;
    }
    display() {
        console.log(Person1.#fullName(this));
    }
}
const p1 = new Person('Soumyadip', 'Majumder');
p1.display();