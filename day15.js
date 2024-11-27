// src/app.js

let age = 20;

// If-else statement
if (age < 18) {
    console.log('You are a minor.');
} else if (age >= 18 && age <= 65) {
    console.log('You are an adult.');
} else {
    console.log('You are a senior.');
}

// Switch statement
let fruit = 'apple';
switch (fruit) {
    case 'banana':
        console.log('Banana is yellow.');
        break;
    case 'apple':
        console.log('Apple is red.');
        break;
    case 'orange':
        console.log('Orange is orange.');
        break;
    default:
        console.log('Unknown fruit.');
}
