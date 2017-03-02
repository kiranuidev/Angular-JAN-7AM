(function () {

  //module creation.
  /* ui routing inject the ui.router module to the main module*/

  angular.module("bitblogger",
    ["register", "login", "header", "comments", "posts", "ui.router"]);

  //consuming the module
  //inject $stateProvider to config.
  angular.module("bitblogger")
    .config(["$stateProvider", function ($stateProvider) {
      console.log("Config : Bitblogger");
      //define states.
      var loginObj = {
        templateUrl: "app/login/login.tpl.html"
      };
      var registerObj = {
        templateUrl: "app/register/register.tpl.html",
        controller: "registerCtrl  as rc"
      };
      var postMain = {
        templateUrl:"app/posts/postsMain.tpl.html",
         name:"posts",
        views:{
          "statusUpdate":{
            templateUrl:"app/posts/posts.tpl.html"
          },
          "groups":{
            templateUrl:"app/groups/groups.tpl.html"
          },
          "friends":{
            templateUrl:"app/friends/friends.tpl.html"
          }
        },
      }
      var postObj = {
        name:"posts",
        views:{
          "statusUpdate":{
            templateUrl:"app/posts/posts.tpl.html"
          },
          "groups":{
            templateUrl:"app/groups/groups.tpl.html"
          },
          "friends":{
            templateUrl:"app/friends/friends.tpl.html"
          }
        },
       
       
      };

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