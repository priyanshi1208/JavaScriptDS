// const prompt=require("prompt-sync")();
// let num=prompt("enter the number");
let num=77;
const arrayOfPrimes=[];
for(let i=2;i<=num;i++){
    while(num%i===0){
        arrayOfPrimes.push(i);
        num/=i;
    }
}
console.log(arrayOfPrimes);