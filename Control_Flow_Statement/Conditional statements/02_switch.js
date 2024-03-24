// In javascript, switch statement is used to perform different actions based on different conditions.
// It is similar to if-else statement but it is more readable when there are multiple conditions.


let value = 42;

switch(typeof value) {
    case 'number':
        console.log('It is a number');
        break;
    case 'string':
        console.log('It is a string');
        break;
    case 'boolean':
        console.log('It is a boolean');
        break;
    default:
        console.log('It is not a number, string or boolean');
        break;
}