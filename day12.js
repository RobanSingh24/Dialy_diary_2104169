// src/app.js

// Function declaration
function greet(name) {
    return 'Hello, ' + name;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

let greeting = greet('John');
let sum = add(3, 5);
let product = multiply(4, 2);

console.log(greeting); // Hello, John
console.log('Sum:', sum); // 8
console.log('Product:', product); // 8
