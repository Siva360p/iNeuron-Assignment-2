var prompt = require('prompt-sync')();

let a = prompt("Enter the starting number of a range : ");
let b = prompt("Enter the last number of a range : ");

function prime(a,b){
    for(let i=a; i<=b; i++){
        p=isPrime(i);
        if(p==true){
            console.log("The factorial of the prime number "+ i + " is "+ factorial(i));
        }
    }
    function isPrime(i){
        if(i<=1)
        return false;
        for(let c=2; c<i ; c++){
            if(i % c == 0)
            return false;
        }
        return true;
    }
    function factorial(i){
        let x=i, y=i;

        while(x>1){
            y=y*(x-1);
            x--;
        }
        return y;
    }
}

prime(a,b);