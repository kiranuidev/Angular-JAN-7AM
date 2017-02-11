(
    function () {
    var inputElements =$("input");
        //inputElements will be an array
        //Let us loop through and assign data to them.
        for(var i=0;i<inputElements.length;i++){
            
           $(inputElements[i]).val("Kiran");
        }
        
        
    }
)();
