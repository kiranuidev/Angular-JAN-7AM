(function (param) {
     console.log(param);
   
    var add = function (first, second) {
        return first + second;
    };

    var  subtract = function (first, second) {
        return first - second;
    };

    var multiply = function (first, second) {
        return first * second;
    };

   var divide= function (first, second) {
        return first / second;
    };
    
    window.calculate={};
    window.calculate.addition = add;
    window.calculate.subtract = subtract;

})(window);
