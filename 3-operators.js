// +
console.log('arr' + ' - object');

console.log(2 + 2);

console.log(2 + '2');

console.log(2 + + '2');


let incr = 10;
let decr = 10;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// ++incr;
// --decr;
// console.log(incr);
// console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr)
console.log(--decr);


console.log(5 < 2); // false
console.log(5%2); // 1


console.log(5*2 = 10); // faile
console.log(5*2 == 10); // true
console.log(5*2 == '10'); // true
console.log(5*2 === '10'); // false
console.log(5*2 === 10); // true


// let isChecked = false;
// let isClosed = true;

// console.log(isChecked && isClosed); // && = 2 element true = true.    if all true = true, if chenge isChecked/isClosed on false will be false
// console.log(isChecked || isClosed); // || 1 element true = true.     if all false = false, if 1 true, 2 false = true


let isChecked = true;
let isClosed = false;
console.log(isChecked && !isClosed); // ! = true change to false and opposite. !true=false / !false=true
console.log(isChecked || isClosed);



let hamburger = true;
let fries = true;

if (hamburger&&fries){
    console.log('I`m happy')
};

let hamburger1 = 3;
let fries1 = 5;
console.log(hamburger1&&fries1); // якщо є false - повернеться false, в іншому випадку повертається останнє (5)


let hamburger2 = 5;
let fries2 = 1;

if (hamburger1&&fries1){
    console.log('I`m happy')
};


// завжди false
// 0
// ""
// null
// undefined
// NaN


let hamburgers = 3;
let cola = 1;
let nuggets = 2;
let fries_classik = 2;

if (hamburgers >= 2 && cola || nuggets >= 2 && fries_classik >= 2){
    console.log('yami');
};