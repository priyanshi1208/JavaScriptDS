const array=[2,-2,4,3,-2,-1,5];
console.log(array);
const triplet=[];
function sumZero(){
    for(let i=0;i<array.length-2;i++){
        for(let j=i+1;j<array.length-1;j++){
            for(let k=j+1;k<array.length;k++){
                if(array[i]+array[j]+array[k]===0){
                    console.log(array[i]+" "+array[j]+" "+array[k]);
                }
            }
            
        }
    }
}
sumZero();