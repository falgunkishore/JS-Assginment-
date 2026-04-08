let N=parseInt(prompt());
let K=parseInt(prompt());

function isPalindrome(n){
let s=n.toString();
let r=s.split("").reverse().join("");
return s===r;
}

let ans=-1;

for(let x=0;x<=100000;x++){
let v=N+x;
if(v%K===0 && isPalindrome(v)){
ans=x;
break;
}
}

alert(ans);