(function () {

    angular.module("products", []);

    function productSvc($http, $q) {
        this.getProducts = function () {
            var products = [1, 2, 3];
            var dfd = $q.defer();
            // dfd.resolve(products);
            $http.get("api/products.json")
                .then(function (response) {
                    dfd.resolve(response.data.products);
                })
                .catch(function (response) {
                    dfd.reject({ messaage: "Error" });
                });
            return dfd.promise;
        };
    }
    function productCtrl(productSvc, $scope, $rootScope) {
        var vm = this;
        $scope.numberOfProducts = 5;
        $scope.priceCriteria="Price";
        productSvc.getProducts()
            .then(function (response) {
                console.log(response);
                //vm.products = response;
                $scope.products = response;
            })
            .catch(function (error) {
                console.log(error);
            });
        $scope.addProductToCart = function (item) {
            $scope.selectedProduct = item;
            $rootScope.$broadcast("ADD-ITEM-T0-CART");
        };
        $scope.showMore = function () {
            $scope.numberOfProducts += 5;
        };
        $scope.sortByPrice=function(){
          if($scope.priceCriteria=="Price"){
              $scope.priceCriteria="-Price";
          }
          else{
              $scope.priceCriteria="Price";
          }
        };
    }
    angular.module("products")
        .service("productSvc",
        ["$http", "$q", productSvc]);

    angular.module("products")
        .controller("productCtrl",
        ["productSvc", "$scope", "$rootScope", productCtrl]);

})();