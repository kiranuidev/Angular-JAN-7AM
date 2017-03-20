(function () {
    function headerCtrl($state,$rootScope) {

        
        var vm = this;
        vm.cartItems =0;
        vm.brandName ="BitBloggerApp"
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
        $rootScope.$on("ADD-ITEM-T0-CART",function(item){
            vm.cartItems++;
        });
    }

    angular.module("header")
        .controller("headerCtrl", ["$state","$rootScope",headerCtrl])
})();