(function(){
    function loginCtrl($scope,version){
        $scope.name="kiran";
        setTimeout(function(){
            $scope.name="Ravi";
            $scope.$apply();
        },5000);

        $scope.$watch('name',function(newVal,oldVal){
            console.log("----Old Value----"+oldVal);
            console.log("----New Value----"+newVal);
        });
        console.log(version);
       sessionStorage.setItem("myuser",$scope.name);
        localStorage.setItem("myuser",$scope.name);
    }

    angular.module("login")
    .controller("loginCtrl",["$scope","version",loginCtrl])
})();