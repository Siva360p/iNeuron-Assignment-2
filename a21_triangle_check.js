var prompt = require('prompt-sync')();

console.log("Enter lenghts of 3 sides of the triangle :- ");

let A = prompt("Enter side A : ");
let B = prompt("Enter side B : ");
let C = prompt("Enter side C : ");

if(A==B){
    if(A==C){
        console.log("The Triangle is equilateral.");
    }
    else{
        console.log("The Triangle is isosceles.");
    }
}
else if(A==C){
    console.log("The Triangle is isosceles.");
}
else if(B==C){
    console.log("The Triangle is isosceles.");
}
else{
console.log("The Triangle is scalene.");
}