const object_name = {
    foodName: "Banana Shake",
    fruit: "Banana",
    Liquid: "Milk",
    nut: "Keshar and Kaju",
    price: 100,
}

console.log(object_name);
console.log(object_name.foodName);


object_name.foodName = "Mango Shake";
object_name.fruit = "Mango";
console.log(object_name);
console.log(object_name.foodName);

for (let prop in object_name) {
    console.log(prop + ":" + object_name[prop]);
}