let L = parseInt(prompt());
let R = parseInt(prompt());
let K = parseInt(prompt());

function isPrime(n){
if(n<2) return false;
for(let i=2;i*i<=n;i++){
if(n%i===0) return false;
}
return true;
}

let count=0;

for(let x=L;x<=R;x++){
if(x%K!==0) continue;

let s=x.toString();
if(s.includes("0")) continue;

let sum=0;
for(let d of s) sum+=parseInt(d);

if(isPrime(sum)) count++;
}

alert(count);