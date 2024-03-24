class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}


const car1 = new Car('Toyota', 'Corolla', 2005);
console.log(car1.displayCarInfo()); // Outputs: 2005 Toyota Corolla

const car2 = new Car('Honda', 'Civic', 2010);
console.log(car2.displayCarInfo()); // Outputs: 2010 Honda Civic