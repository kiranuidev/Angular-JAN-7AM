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

var bmw= new Object(car);
console.log(bmw.engineCapacity);
console.log(bmw.seatingCapacity);