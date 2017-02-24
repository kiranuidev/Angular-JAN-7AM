(function () {
    function headerCtrl() {

        
        var vm = this;

        //TODO: Move navItems to service in future.
        vm.navItems = [
            { "key": "home", "value": "Home" },
            { "key": "products", "value": "Products" },
            
            { "key": "register", "value": "Register" },
            { "key": "login", "value": "Login" },
        ];
    }

    angular.module("header")
        .controller("headerCtrl", [headerCtrl])
})();