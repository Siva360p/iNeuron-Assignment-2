let i=1, sum=0;

for (i=1;i<=1000;i++){
    if((i%3 == 0) && (i%5 == 0)){
        sum=sum+i;
    }
}

/*   OR

for(i=1;i<=1000;i++){
    if(i%3==0) {
        if(i%5==0){
          sum=sum+i;
        }
    }
}
*/
console.log("Sum of multiples of 3 and 5 below 1000 is : "+ sum);
