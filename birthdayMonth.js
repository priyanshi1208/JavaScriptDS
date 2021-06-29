let array=[];
for(let i=0;i<50;i++){
    array.push(Math.floor(Math.random()*12+1));
}
const map=array.reduce((accumulator,item)=>accumulator.set(item,(accumulator.get(item)||0)+1),new Map());
console.log(map);
