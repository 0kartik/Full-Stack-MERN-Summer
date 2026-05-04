let num1=10;
let num2=20;
let op="";

switch(op){
    case "+":
        console.log(num1+num2);
    case "-":
        if (num1>num2){
            console.log(num1-num2);
        }
        else{
            console.log(num2-num1);
        }
    case "x":
        console.log(num1*num2);
    case "/":
        console.log(num1/num2);
    default:
        console.log("Enter valid operator");
}