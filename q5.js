let N=parseInt(prompt());
let seed=parseInt(prompt());

let skip=seed+2;
let m=0;
let sum=0;

while(sum<N){
m++;
if(m%skip!==0) sum+=m;
}

alert(m + " " + sum);