(function () {

  //module creation.
  angular.module("bitblogger",
    ["register", "login", "header","comments","posts","ui.router"]);

  //consuming the module
  angular.module("bitblogger")
    .config(["$stateProvider",function ($stateProvider) {
      console.log("Config : Bitblogger");
      //Defining states.
      var loginObj ={
        templateUrl:"app/login/login.tpl.html"
      };
      var postsObj ={
        templateUrl:"app/posts/posts.tpl.html"
      };
    
      var registerObj={
        templateUrl:"app/register/register.tpl.html"
      };

      //register the states with state $stateProvider
      $stateProvider.state("login",loginObj);
       $stateProvider.state("register",registerObj);
       $stateProvider.state("posts",postsObj);
  


}]);

  angular.module("bitblogger")
    .controller("mainCtrl", [mainCtrlFn]);

  function mainCtrlFn() {
    var vm = this;
    vm.headerTemplate = "app/header/header.tpl.html";
    vm.commentsTemplate ="app/comments/comments.tpl.html";
    vm.registerTemplate = "app/register/register.tpl.html";
    vm.postsTemplate ="app/posts/posts.tpl.html";
    vm.appName = "BitBlogger";
    vm.show = false;
    vm.firstName="Test";
   
    vm.tryMe= function(){
      console.log(vm.firstName);
    };
  }

})();