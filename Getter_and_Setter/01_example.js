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


let myBike = new Bicycle('Trek', 'Domane');
console.log(myBike.brand); // Outputs: Trek
console.log(myBike.model); // Outputs: Domane

myBike.brand = 'Specialized';
myBike.model = 'Roubaix';
console.log(myBike.brand); // Outputs: Specialized
console.log(myBike.model); // Outputs: Roubaix