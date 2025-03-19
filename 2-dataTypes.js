/*
    1. Simple types or primitives
        - string
        - number
        - boolean
        - null
        - undefined
        - Symbol
        - bigint


    ----------------

    2. Objects

    - object {}
    - arrays
    - objects data
    - regular expressions
    - error
    
    -----------------
*/

let number = 5;

let floatNumber = 5.5;

// infiniti , NaN
console.log(4/0);
console.log(-4/0);

console.log('string' * 4);

//boolean
let isExist = true; //false

//null, undefined
let value = null;
console.log(value);

let value2;
console.log(value2);

//object
let obj = {};

let persone = {
    name: 'Sasha',
    age: 28,
    status: {
        qwe: 123,
        qwerty: 321
    }
};
console.log(persone.status.qwerty);

let persone1 = new Object();
persone1.name = 'Sashko'
persone1.age = 30

// console.log(persone1.name);

console.log(`Name: ${persone.name}`);
console.log(`Age: ${persone1.age}`);

let endpoint = 'help';
console.log(`https://someurl/${endpoint}`);

// array
let arr = ['text', 'some text', 123, {name: 123}];
console.log(arr);
console.log(arr[1]);
console.log(arr[2]);

let numArr = [1, 2, 3];
let numObj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(numArr[1]);
console.log(numObj.a);


let salary = {
    'Anna': 1000,
    'Vlada': 1200
}

let salaryArr = ['Anna', 1000, 'Vlada', 1200];

let someObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 1200
}

console.log(salaryArr[0]);
console.log(someObj[1]);


// edit
let someObj1 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 1200
};
console.log(`b1: ${someObj1['b']}`);

someObj1.b = 2000;
console.log(`b2: ${someObj1['b']}`);



let someText = ' Hello World!! ';

// console.log(someText.length);
// console.log(someText.substring(6, 12));
// console.log(someText.toUpperCase());
// console.log(someText.toLowerCase());
// console.log(someText.trim());
// console.log(someText.charAt(1)); // H
// console.log(someText[1]); // same ^



let myArr = [];

myArr.push('hi or HELLO');
myArr.push('thx or THENKS');

console.log(myArr);
console.log(myArr.length);
console.log(myArr.join(' '));
console.log(myArr.pop()); // last element
console.log(myArr); // without last element



let newObj = {
    a: 1,
    b: 2,
    c: 'test text'
};

console.log(newObj.a);
delete newObj.a;
console.log(newObj);
console.log(newObj.c.length);

let someNum = 12.4;
console.log(Math.round(someNum));

let resolution = '12.2px';
console.log(parseInt(resolution));
console.log(parseFloat(resolution));