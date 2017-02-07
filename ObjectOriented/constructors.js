function vehicle(){
    //private property
    var vehiclename="";
    
    //public property
    this.engineCapacity="";
}
//Static property;
vehicle.country="India";

var car = new vehicle();
car.engineCapacity="1200cc"
car.seatingCapacity=2;

var cruise = new vehicle();
cruise.noOfSeats=100;
cruise.engineCapacity="4000cc";


var bmw= new Object(car);
console.log(bmw.engineCapacity);
console.log(bmw.seatingCapacity);