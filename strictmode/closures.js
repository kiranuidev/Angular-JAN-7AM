/*welcome is outerfunction*/
function welcome(user){
      
        //greeting is innerfunction.
        return function greetings(){
        console.log("Welcome to "+user);
    }
}
/*
var display = welcome("kiran");
var printUser = welcome("Murthy");
display();
printUser();*/

welcome("kiran")();
welcome("Ravi")();