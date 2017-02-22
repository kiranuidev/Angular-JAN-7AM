(function(){

    //module creation.
    angular.module("login",[]);

    //consuming the module
    angular.module("login")
    .config([function(){
        console.log("Config : Login");
    }]);
})();