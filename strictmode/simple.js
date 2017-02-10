function bookTicket(source, destination, mode) {
   var discount=0;
    if(mode=="flight"){
        discount=500;
    }
    else{
        discount=100;
    }
    return {
        printTicket:function () {
            console.log("Your ticket from " + source);
            console.log("To " + destination);
            console.log("discount"+ discount);
        }
    }
}

var ticket = bookTicket("hyderabad","Bhutan","Flight")
ticket.printTicket();