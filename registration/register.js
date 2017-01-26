//console.log(document);
//dom traversing
// by Id  - only one element.
// by name =>multiple elements
// by class=> multiple elements
// by tagName =>Multiple elements.
var firstName= document.getElementById("txtFirstName");
var lastName= document.getElementById("txtLastName");

console.log(firstName.type);
console.log(firstName.id);
console.log(firstName.className);

function readData(){
   console.log(firstName.value);
    console.log(lastName.value);
}