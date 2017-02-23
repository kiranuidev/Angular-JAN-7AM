(function () {

  //module creation.
  angular.module("bitblogger",
    ["register", "login", "header"]);

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
    vm.appName = "BitBlogger";
    vm.show = false;
    vm.showAppName = function () {
      vm.show = true;
    };
    vm.hideAppName = function () {
      vm.show = false;
    };
  }

})();