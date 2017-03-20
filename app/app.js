(function () {

  //module creation.
  /* ui routing inject the ui.router module to the main module*/

  angular.module("bitblogger",
    ["register", "login", "header",
    "common", "comments", "posts", "ui.router","products"]);

  //consuming the module
  //inject $stateProvider to config.
  angular.module("bitblogger")
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log("Config : Bitblogger");
        $locationProvider.html5Mode(false).hashPrefix('!');
        //define states.
        var loginObj = {
          templateUrl: "app/login/login.tpl.html"
        };
        var registerObj = {
         
              templateUrl: "app/register/register.tpl.html",
              controller: "registerCtrl  as rc"
           

        };
        var postMain = {
        
              templateUrl: "app/posts/posts.tpl.html",
              controller:"postsCtrl as pc",
              params:{userInfo:null}
        };

           var productsObj = {
              templateUrl: "app/products/products.tpl.html",
              controller:"productCtrl as prc",
        }


        $stateProvider.state("products",productsObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
        $stateProvider.state("posts", postMain);
        // $stateProvider.state("posts",postObj);

      }]);

  angular.module("bitblogger")
    .controller("mainCtrl", [mainCtrlFn]);

  function mainCtrlFn() {
    var vm = this;
    vm.headerTemplate = "app/header/header.tpl.html";
    vm.commentsTemplate = "app/comments/comments.tpl.html";
    vm.registerTemplate = "app/register/register.tpl.html";
    vm.postsTemplate = "app/posts/posts.tpl.html";
    vm.appName = "BitBlogger";
    vm.show = false;
    vm.firstName = "Test";

    vm.tryMe = function () {
      console.log(vm.firstName);
    };
  }

})();