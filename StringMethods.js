let alpha = "abcdefghijklmnopqrstuvwxyz";
console.log(alpha.length);

let sentence = "i am going for a walk";
console.log(sentence.length);

console.log(alpha[0]);

//.toLowerCase
let result = alpha.toUpperCase();
console.log(result);
console.log(alpha.toLowerCase());

//.toUpperCase
let answer = sentence.toUpperCase();
console.log(answer);

//charAt
const myfavouriteFood = "BreadAndTea";
myfavouriteFood.charAt(4);
console.log(myfavouriteFood.charAt(4));

//.slice
let food = "riceandbeans";
let slicedFood = food.slice(5, -1);
console.log(slicedFood);

//.include
let mybestie = "ROSEMARY";
let her = mybestie.includes("E");
console.log(mybestie);
console.log(her);

//.split
let date = "23,05,2025";
console.log(date.split(","));

let names = "Rose Ayo Yemi";
console.log(names.split(" "));

//value.toString
let num3 = 4;
console.log(num3.toString());

const arr = [2, 4, 5];
const res = arr.toString();
console.log(res);

//padStart
const code = "9";
console.log(code.padStart(4, 0));
