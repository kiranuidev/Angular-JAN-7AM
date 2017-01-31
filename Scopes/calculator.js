(function (param) {
     console.log(param);
    window.calculate={};
    window.calculate.add = function (first, second) {
        return first + second;
    };

    function subtract(first, second) {
        return first - second;
    }

    function multiply(first, second) {
        return first * second;
    }

    function divide(first, second) {
        return first / second;
    }


})(window);
