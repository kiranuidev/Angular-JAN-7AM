/*
var txtFirstName = document.getElementById("txtFirstName");

console.log(txtFirstName.value);
console.log(txtFirstName.type);
console.log(txtFirstName.className);
console.log(txtFirstName.id);
*/

/*
Dealing with class 
innerHTML
outerHTML
textContent.
*/

/*var elementsByClassName = document.getElementsByClassName("form-inline");


for(var i=0;i<elementsByClassName.length;i++){
    console.log(elementsByClassName[i]);
    console.log(elementsByClassName[i].innerHTML);
    elementsByClassName[i].className="form-inline-green";
}*/
/*changing inline styles dynamically*/


var pTags = document.getElementsByTagName("p");

for(var i=0;i<pTags.length;i++){
    console.log(pTags[i]);
    pTags[i].style="font-size:12px";
}














