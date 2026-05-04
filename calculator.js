let num1=10;
let num2=20;
let op="";

switch(op){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        if (num1>num2){
            console.log(num1-num2);
            break;
        }
        else{
            console.log(num2-num1);
            break;
        }
    case "x":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Enter valid operator");
}