(function(){
    function registerSvc(){
        this.getCountries=function(){
            return [
                {"name":"India","code":"IN"},
                {"name":"United States","code":"US"}
            ];
        };
    }
    angular.module("register")
    .service("registerSvc",[registerSvc]);
})();