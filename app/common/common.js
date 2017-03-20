angular.module("common",[]);

function customBrand(){
 return{
     /*Template is a property of a directive
      it will render the given html snippet */ 
     template:'<a class="navbar-brand" href="#">{{hc.brandName}}</a>'
 };
}

function customNavBar(){
return{
     /*templateUrl is a property of a directive
      it will render the given html snippet from a specified url */ 
     templateUrl:'app/header/header.tpl.html',
     restrict:"A,,E,C"
 };
}

angular.module("common")
.directive("customNavBar",[customNavBar]);
angular.module("common")
.directive("customBrand",[customBrand]);