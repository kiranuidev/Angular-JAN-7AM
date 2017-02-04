var firstName= document.getElementById("txtFirstName");
var lastName= document.getElementById("txtLastName");
var terms = document.getElementById("chkTerms");
var ddlCountries = document.getElementById("ddlCountry");

var countries =[{name:"India",code:"IN"},
               {name:"United States",code:"USA"}];

function readData(){
   console.log(firstName.value);
    console.log(lastName.value);
    console.log(terms.checked);
}

function buildCountryList(){
    for(var i=0;i<countries.length;i++){
        var code = countries[i].code;
        var name= countries[i].name;
        var optionTag = document.createElement("option");
        optionTag.value=code;
        optionTag.textContent=name;
        ddlCountries.appendChild(optionTag);
        
    }
}

buildCountryList();