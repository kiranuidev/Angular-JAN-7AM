function Person(panData) {
    this.firstName = "";
    this.lastName = "";
    var panNumber = panData;
    this.maskedPAN = function () {
        var panLastFourDigits = panNumber.substring(6, 10);
        return "XXX-XXX-"+panLastFourDigits;
    };
}

var employee = new Person("123AGK9870");
console.log(employee.maskedPAN());
