(function () {

    function registerCtrl(registerSvc,registerFac,$state) {
        
        var mydata = localStorage.getItem("myuser");
        console.log(mydata);
        
        var vm = this;
        vm.user ={};
        vm.user.username=mydata;
        vm.nextPage= function(){
            $state.go("posts",{userInfo:vm.user});
            //go go to other page...
        };
        //vm.countries = registerSvc.getCountries();
        //make a call to the register service
        //fetch the data from the json
        registerFac.getCountriesFromJson()
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
        .controller("registerCtrl", ["registerSvc","registerFac","$state", registerCtrl]);

})();