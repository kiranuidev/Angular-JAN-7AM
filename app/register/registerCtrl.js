(function () {

    function registerCtrl(registerSvc) {
        var vm= this;
        this.countries = registerSvc.getCountries();
    }

    angular.module("register")
        .controller("registerCtrl", ["registerSvc",registerCtrl]);

})();