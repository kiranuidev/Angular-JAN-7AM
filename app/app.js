(function () {

  //module creation.
  angular.module("bitblogger",
    ["register", "login", "header","comments"]);

  //consuming the module
  angular.module("bitblogger")
    .config([function () {
      console.log("Config : Bitblogger");
    }]);

  angular.module("bitblogger")
    .controller("mainCtrl", [mainCtrlFn]);

  function mainCtrlFn() {
    var vm = this;
    vm.headerTemplate = "app/header/header.tpl.html";
    vm.commentsTemplate ="app/comments/comments.tpl.html";
    vm.registerTemplate = "app/register/register.tpl.html";
    vm.appName = "BitBlogger";
    vm.show = false;
    vm.firstName="Test";
   
    vm.tryMe= function(){
      console.log(vm.firstName);
    };
  }

})();