(
    function () {
    var classElements =$(".form-control");
        //inputElements will be an array
        //Let us loop through and assign data to them.
        for(var i=0;i<classElements.length;i++){
            
           $(classElements[i]).val("Classes");
        }
        
        
    }
)();
