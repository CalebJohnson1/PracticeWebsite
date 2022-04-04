console.log('hello!');

var x = 'bananannananananannanananananana';
console.log(x);

var someNumber = 45;
console.log(someNumber);

// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = age;

var num1 = 10;

num1++;
num1--;
console.log(num1);

console.log(num1 % 6);

num1 += 10;
console.log(num1);

function fun() {
    console.log('This is a function!');
}

fun();

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// greeting();

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

// var num = 0;

/* while (num < 100) {
    num++;
    console.log(num);
}*/ 
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

let yourAge = 18;
let yourName = 'Caleb';
let name = {first: 'Caleb', last: 'Johnson'};
let truth = false;
let groceries = ['apple', 'banana', 'oranges'];
let random;
let nothing = null;

// Strings in JavaScript (common methods)
let fruit = 'apple, banana, oranges, blackberry';
let moreFruit = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('ba'));
console.log(fruit.slice(2, 5));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // Split by a comma
console.log(fruit.split('')); // Split by characters

// Arrays
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
console.log(fruits[3]);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift(); // Removes first element from array
console.log(fruits);
fruits.unshift('kiwi'); // Adds first element to array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b}));

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript (also called dictionaries in Python)

let student = {
    first: 'Caleb', 
    last: 'Johnson', 
    age: 21,
    height: 175,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student.last);
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, control flows (if else)
/* var age = prompt('What is your age?');

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
} else {
    status = 'not my audience';
}
console.log(status); */

// Switch statements
switch(5) {
    case 0: 
        text = 'Weekend';
        break;
    case 5: 
        text = 'Weekend';
        break;
    case 6: 
        text = 'Weekend';
        break;

    default:
        text = 'Weekday'
}

console.log(text);

// 