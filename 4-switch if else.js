// if-else

if(4==9){
    console.log('Expression is true')
} else {
    console.log('Expression is false')
};

if(4){
    console.log('Expression is true')
} else {
    console.log('Expression is false')
};


let num = 500;

if(num < 49){
    console.log('error')
} else if (num > 100){
    console.log('big numb')
} else {
    console.log('ok')
};


let num1 = 50;
(num1 === 50) ? console.log('ok') : console.log('error'); //ternary operator




// switch-case

let  number = 55;

switch(number){
    case 49:
        console.log('value is 49');
        break;
    case 50:
        console.log('value is 50');
        break;
    case 51:
        console.log('value is 51');
        break;
    case 52:
        console.log('value is 52');
        break;
    default:
        console.log('default');
        break;
};


let  car = 'test';

switch(car){
    case car:
        console.log('car BMW');
        break;
    case 'AUDI':
        console.log('car AUDI');
        break;
    case 'Mercedes':
        console.log('car Mercedes');
        break;
    case 'Ford':
        console.log('car Ford');
        break;
    default:
        console.log('went to foot');
        break;
};