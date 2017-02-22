(function(){

    //module creation.
    angular.module("bitblogger",
    ["register","login","header"]);

//consuming the module
angular.module("bitblogger")
.config([function(){
  console.log("Config : Bitblogger");
}]);
       

})();