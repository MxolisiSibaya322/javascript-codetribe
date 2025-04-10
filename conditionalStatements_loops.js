//Exercise 1

let tempereture = 0

if(tempereture<0){
    console.log("it's freezing");
}else if (tempereture>=0 && tempereture <=15){
    console.log("it's cold");
} else if (tempereture>=16 && tempereture <=25){
    console.log("it's mild");
} else if (tempereture >25){
    console.log("It's warm")
}

switch (true){
    case tempereture<0:
        console.log("it's freezing");
        break;
    case tempereture>=0 && tempereture<=15:
        console.log("it's cold");
        break;
    case tempereture>=15 && tempereture<=25:
        console.log("it's mild");
        break;
    case tempereture>25:
        console.log("it's freezing");
        break;
    default:
        console.log("it's freezing");
        break;
}


//Exercise 2
let number = 10
if ( number %2===0 && number %3==0){
    console.log("Divisible by both");
    
} else if (number %2===0 ){
    console.log("Divisible by 2");    
} else if (number %3===0 ){
    console.log("Divisible by 3");    
}else{
    console.log("Not Divisible by 3 or 2");    

}
switch(true){
    case number %2===0 && number %3==0:
        console.log("Divisible by both");
        break;
    case number %2===0 :
        console.log("Divisible by 2");
        break;
    case number %3===0 :
        console.log("Divisible by 3");
        break;
    default:
        console.log("Not Divisible by 3 or 2");
        break
}
//Exercise 3
console.log("print 1 to 10:")
for(let i =1;i<=10;i++){
    console.log(i);
    
}

console.log("print even numbers between 1 to 20:")
for(let i =1;i<=20;i++){
    i%2==0? console.log(i):0;
}

console.log("print sum of numbers between 1 to 100:")
let total = 0
for(let i =1;i<=100;i++){
    total+=i
}
console.log("Total",total)

console.log('Given Array, print elements')
const numbers =[1,2,3,4,5]
for(let i = 0;i<numbers.length;i++){
    console.log(numbers[i])
}

console.log('Given Array, print largest')
const numbers2 =[3,7,2,5,10,6]
largest =numbers2[0]
for(let i = 1;i<numbers2.length;i++){
    largest = numbers2[i] >largest? numbers2[i]:largest
}
console.log("Largest",largest)
//Exercise 4

let count1 = 1
console.log("print 1 to 10:")
while( count1<=10){
    console.log(count1)
    count1++
}

let count2 =1
console.log("print even numbers between 1 to 20:")
while( count2<=20){
    count2 %2 ===0? console.log(count2): 0
    count2++
}

console.log("print sum of numbers between 1 to 100:")
let total2 = 0
let count3 =1
while(count3<=100){
    total2 += count3
    count3++
}
console.log("Total",total2)

console.log("Print all multiples of 5 less than 50");

let count4=5

while(count4<=50){
    count4%5===0? console.log(count4):0;   
    count4++
}


//Exercise 5

let count5 =1
console.log("print 1 to 10:")
do{
    console.log(count5);
    count5++
}while(count5<=10)

let count6 =1
let total3 = 0
console.log("print sum of numbers between 1 to 100:")
do{
    total3 +=count6
    count6++
}while(count6<=100)
    console.log("Total",total3);



    

let num1 =0
do{

    num1 =   parseInt(prompt("please enter a number greater than 10"))

}while(num1<=10)

let num2 =0
do{
    num2 =   parseInt(prompt("guess a number"))

}while(num2!==55)