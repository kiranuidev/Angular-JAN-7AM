(function(){
  //attribute selector
    var inputType=$("input[type='checkbox']");
    console.log(inputType);
    
    var radioButtons=  $('input[type="radio"][value="M"]');
    console.log(radioButtons);
    //Accessing the controls inside a particulat Tag.
    
   var locationControls = $('#locationCtrl input[type="radio"]');
    console.log(locationControls);
    
    var spanRadios = $("span input[type='radio']");
    console.log(spanRadios);
}

)();