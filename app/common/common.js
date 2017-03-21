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
function customDatePicker(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.datepicker();
        }
    };
}

function numbersOnly(){
  return {
      restrict:"A",
      link:function(scope,element,attrs){
          //scope: inherits parent controllers scope.
          //element: get the complete html of the element.
          //attrs: attributes of the element where the directive is declared.
          console.log(scope);
          console.log(element);
          console.log(attrs);
          var maxlength = attrs["maxlength"]?attrs["maxlength"]:0;
          element.bind("keypress",function(e){
              console.log(e.keyCode);
              var selectedKey = e.key;
              
              var reg = new RegExp(/^[0-9]$/);
              if(!(reg.test(selectedKey)||this.value.length>maxlength)){
                  e.preventDefault();
              }

          });
      }
  };
}

angular.module("common")
.directive("customNavBar",[customNavBar]);
angular.module("common")
.directive("customBrand",[customBrand])
.directive("numbersOnly",[numbersOnly])
.directive("customDatePicker",[customDatePicker])
