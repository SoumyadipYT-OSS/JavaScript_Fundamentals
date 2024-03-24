let Person = class {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this.name;
    }
}

const person1 = new Person("Sunil Chettri");

console.log(person1); // Outputs: Person { _name: 'Sunil Chettri' }