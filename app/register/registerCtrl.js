(function () {

    function registerCtrl(registerSvc) {
        var vm = this;
        //vm.countries = registerSvc.getCountries();
        //make a call to the register service
        //fetch the data from the json
        registerSvc.getCountriesFromJson()
        //handle positive response
            .then(function (response) {
                console.log(response);
                vm.countries = response.data.countries;
            })
            //handle negative response
            .catch(function (response) {
                console.log(response);
            })
            // handle everything.
            .finally(function (response) {
                console.log(response);
            });

            

    }

    angular.module("register")
        .controller("registerCtrl", ["registerSvc", registerCtrl]);

})();