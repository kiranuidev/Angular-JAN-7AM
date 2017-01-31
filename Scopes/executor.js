var elements={};

function addition(){
    var first = elements.firstNumber.value;
    var last = elements.lastNumber.value;
    var result =elements.result;
    result.value = add(first,last);
}

function getElementReferecnes(){
    elements.firstNumber = document.getElementById("txtFirstNumber");
    elements.lastNumber = document.getElementById("txtLastNumber");
    elements.result=document.getElementById("txtResult");
}

function init(){
    getElementReferecnes();
}
init();