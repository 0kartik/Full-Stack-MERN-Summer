// checking prime or not 
n=2
function Prime(num){
    if(num<=1){
        return false
    }
    if(num==2){
        return true
    }
    else{
        for(let i=2;i*i<=num;i++){
            if(num%i!=0){
                return true
            }
        }
    }
}
if(Prime(n)){
    console.log("prime");
}
else{
    console.log("not prime");
}