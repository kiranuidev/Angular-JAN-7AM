//function declaration.
// 1. name functions.
//2. anonymous functions.

//add is a function name
//firstNumber and secondNumber are called parameters or arguments.
function add(firstNumber,secondNumber){
//logic goes here.
    var result = firstNumber+secondNumber;
    //return is a keyword which gives data back to the function calller.
    return result;
}

//function Calling....
 var output = add(1,2);

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber;
}

var multiplicationResult = multiply(10,20)