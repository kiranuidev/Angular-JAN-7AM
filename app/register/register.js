(
    function () {
        angular.module("register", []);

        //consuming register module.
        angular.module("register")
        .config([function(){
            console.log("Config : Register");
        }]);
    }
)();