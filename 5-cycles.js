// while

let num = 50;

while(num < 90){
    console.log(num); //infinite lop
}



let num1 = 80;

while(num1 < 90){
    console.log(num1);
    num1++;
}


// do - while

let num2 = 80;
do{
    console.log(num2);
    num2++;
}while(num2 < 90);  // while and do-while don`t support un Cypress
// ------------------  ------------------  ------------------  ------------------  ------------------  ------------------



// for

for(let i = 0; i < 8; i++){
    console.log(i)
} // 0-7

num = 10;
for(let i = 0; i < 8; i++){
    console.log(num);
    num++
} // 10-17


num = [1, 2, 3, 4];
for(let i = 0; i < num.length; i++){
    console.log(num);
    num++;
}


num = 10;
for(let i = 0; i <= 20; i--){
    console.log(num);
    num++;
} // infinite


num = 0;
for(let i = 0; i < 8; i++){
    if(num === 5){
        break;
    }
    console.log(num);
    num++
} // 0-4


for(let i = 0; i < 8; i++){
    if(i === 5){
        continue;
    }
    console.log(i)
} // 0-7 (without 5)



for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);

    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`);
    }
}