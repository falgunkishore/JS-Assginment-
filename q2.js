let N = parseInt(prompt());
let seed = parseInt(prompt());

let cur=N;

for(let i=0;i<3;i++){
if(cur%2===0) cur = cur/2 + seed;
else cur = cur*3 - seed;
}

let result="NO";

if(cur>=100 && cur<=999){
let mid = Math.floor(cur/10)%10;
if(mid===seed) result="YES";
}

alert(result + ", " + cur);