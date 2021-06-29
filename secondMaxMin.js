// const prompt=require("prompt-sync")();
// let num=prompt("Enter number");
let num;
let i=0;
let arrayOfNumbers=[];
for(let i=0;i<10;i++){
 do{
     num=Math.floor(Math.random()*999);
    }while(num<100);
 arrayOfNumbers[i]=num;
}
console.log(arrayOfNumbers);
function secondMax(){
    var max=Math.max.apply(null,arrayOfNumbers);
    arrayOfNumbers.splice(arrayOfNumbers.indexOf(max),1);
    return Math.max.apply(null,arrayOfNumbers);
}
function secondMin(){
    var max=Math.min.apply(null,arrayOfNumbers);
    arrayOfNumbers.splice(arrayOfNumbers.indexOf(max),1);
    return Math.min.apply(null,arrayOfNumbers);
}
arrayOfNumbers.sort();
function secondMaxWithSort(){
    arrayOfNumbers.indexOf(arrayOfNumbers.length-1);
}
function secondMinWithSort(){
    arrayOfNumbers.indexOf(1);
}