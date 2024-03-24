// Block scope
/*
    Block scope is created when a variable is declared with the let or const keywords.
    Variables declared with let or const are only visible within the block they are declared.
    A block of code is a group of statements that are enclosed in curly braces ({}).
*/

function example() {
    if (true) {
        let bv = "Block Scope";
        console.log(bv);
    }
}
example();