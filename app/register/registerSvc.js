(function(){
    function registerSvc($http){
        this.getCountries=function(){
            return [
                {"name":"India","code":"IN"},
                {"name":"United States","code":"US"}
            ];
        };

        this.getCountriesFromJson=function(){
           return $http.get("api/countrieas.json");
        };
    }
    angular.module("register")
    .service("registerSvc",["$http",registerSvc]);
})();