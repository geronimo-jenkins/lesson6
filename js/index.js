//alert('World');
// document.write('<h1>Hello World!</h1>');
//console.log('Hello World!');

// String
const productName = 'MacBook Pro 15';
// Number - NaN, Infinity
const productPrice = 2000.50;
// Boolean
let productIsAvailable = true; // false

// undefined
let deliveryDate = undefined;
// null
let customerName = null;

// Object
let product = {};

// Symbol ES2015+
let uniqueId = Symbol();

const productPriceWithVAT = productPrice * 1.2;

document.write(`Product 
price 
with 
VAT: ${productPriceWithVAT}`);

const clientName = prompt('Enter your name:');
document.write('<br>');
document.write('Client name: ' + clientName);

const clientAge = parseInt(prompt('Enter your age:'));
prn('Client age: ' + clientAge);

prn('Next year you will be: ' + getNextAge(clientAge));

prn(checkAge(clientAge));

function getNextAge(currentAge) {
    const nextAge = currentAge + 1;
    return nextAge;
}

function checkAge(age) {
    if (age < 18) {
        return 'Too young';
    } else {
        return 'Adult';
    }
}


function prn(data) {
    document.write('<br>' + data);
}

// Hometask

const a = prompt('Enter A');
const b = prompt('Enter B');
const c = prompt('Enter C');

function quadraticEq(a, b, c) {
    
    return result;
}

