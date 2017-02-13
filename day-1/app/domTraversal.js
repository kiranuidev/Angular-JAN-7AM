(
    function () {
    var children = $("#parent").children();
        console.log("---Children of parent");
        console.log(children);
        
    var parentOfChildOne =
        $("#childone").parent();
        console.log("---parent of childone");
        console.log(parentOfChildOne);
      
    var previous = $("#childtwo").prev();
        console.log("---previous element of childtwo");
        console.log(previous);
        
    var nextElement      
     = $("#childone").next();
         console.log("---next element of childone");
        console.log(nextElement);
        
        var sibblings= $("#childone").siblings();
        console.log("--Siblings of childone");
        console.log(sibblings);
    }
)();
