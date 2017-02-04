var elements ={};
function init(){
   getElementRef(); 
    fillDataInControls();
}

function fillDataInControls(){
   elements.username.value =localStorage.getItem("UserName");
       elements.password.value =localStorage.getItem("Password");
    
}

function login(){
    var localData = localStorage;
    var username=elements.username.value;
    var password=elements.password.value;
    localData.setItem("UserName",username);
    localData.setItem("Password",password);
}

function getElementRef(){
    elements.username=document.getElementById("username");
    elements.password=document.getElementById("password");
}

init();