(function(){
    function loginCtrl($scope){
        $scope.name="kiran";
        setTimeout(function(){
            $scope.name="Ravi";
            $scope.$apply();
        },5000);
       sessionStorage.setItem("myuser",$scope.name);
        localStorage.setItem("myuser",$scope.name);
    }

    angular.module("login")
    .controller("loginCtrl",["$scope",loginCtrl])
})();