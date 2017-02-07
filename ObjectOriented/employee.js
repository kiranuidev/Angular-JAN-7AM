function Person(panData) {
    this.firstName = "";
    this.lastName = "";
    var panNumber = panData;
    this.age=""
    this.gender="";
    this.maskedPAN = function () {
        var panLastFourDigits = panNumber.substring(6, 10);
        return "XXX-XXX-"+panLastFourDigits;
    };
}

var employee = new Person("123AGK9870");
console.log(employee.maskedPAN());

var manager = new Person("1837749494");
manager.reporteesCount =10;
-----------------------------------------------
    class Person{
        
    }
    class manager extends Person{
      public reporteesCount {get;set;}  
    }

