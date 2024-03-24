class Bicycle {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }

    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }

    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
}


let myBike = new Bicycle('Tata', 'Stryder');
console.log(myBike.brand); // Outputs: Tata
console.log(myBike.model); // Outputs: Stryder

myBike.brand = 'Bajaj';
myBike.model = 'Dominar';
console.log(myBike.brand); // Outputs: Bajaj
console.log(myBike.model); // Outputs: Dominar