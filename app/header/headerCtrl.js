(function () {
    function headerCtrl($state) {

        
        var vm = this;

        //TODO: Move navItems to service in future.
        vm.navItems = [
                     
            { "key": "posts", "value": "Posts" },
            { "key": "register", "value": "Register" },
              { "key": "products", "value": "Products" },
            { "key": "login", "value": "Login" },
        ];
        vm.changeState= function(data){
            console.log(data);
            $state.go(data);
        };
    }

    angular.module("header")
        .controller("headerCtrl", ["$state",headerCtrl])
})();