function fn1(x) {
    function fn2(y) {
        return x * y;
    }
    return fn2;
}

let res = fn1(5);
console.log(res(5)); // Output: 25

console.log("Another Example: ")
let res1 = fn1(3);
console.log(res1);
console.log(res1(2)); // Output: 6