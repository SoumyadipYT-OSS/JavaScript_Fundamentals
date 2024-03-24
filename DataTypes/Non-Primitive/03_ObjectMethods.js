const juice = new Object({
    name: "Apple Juice",
    fruit: "Apple",
    liquid: "Water",
    price: 50,
    getDiscount: function() {
        return this.name + " is available at a discounted price of " + this.price * 0.9;
    }
});


console.log(juice.getDiscount());