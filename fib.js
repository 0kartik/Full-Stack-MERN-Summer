var a=0;
var b=1;
var sum=0;

for (var i=0;i<10;i++){
    console.log(a);
    sum=a+b;
    a=b;
    b=sum;
    
}