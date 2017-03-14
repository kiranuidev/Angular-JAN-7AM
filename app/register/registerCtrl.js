(function () {

    function registerCtrl(registerSvc,$state) {
        var vm = this;
        vm.user ={};
        vm.nextPage= function(){
            $state.go("posts",{userInfo:vm.user});
            //go go to other page...
        };
        //vm.countries = registerSvc.getCountries();
        //make a call to the register service
        //fetch the data from the json
        registerSvc.getCountriesFromJson()
        //handle positive response
            .then(function (response) {
                console.log(response);
                vm.countries = response.data.countries;
                vm.user.selectedCountry=vm.countries[1];
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
        .controller("registerCtrl", ["registerSvc","$state", registerCtrl]);

})();