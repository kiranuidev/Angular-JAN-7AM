var elementReferences = {};

//Page initialization Logic
function pageInit() {
    getElementReferences();
    bindCountryList();
    bindMonthsList();
    buildYearList();
    //get element references
    //bind dropdown list.
    // attach events 
}

//bind the countries list to the country dropdown
function bindCountryList() {
    var countries = getCountries();
    for (var i = 0; i < countries.length; i++) {
        var code = countries[i].code;
        var name = countries[i].name;
        var optionTag = buildOptionTag(code, name);
        elementReferences.countries.appendChild(optionTag);

    }
}

//will return the list of countries.
function getCountries() {
    return [{
            name: "India",
            code: "IN"
        },
        {
            name: "United States",
            code: "USA"
        }];
}

function bindMonthsList() {
    var months = getMonths();
    for (var i = 0; i < months.length; i++) {
        var code = months[i].code;
        var name = months[i].name;
        var optionTag = buildOptionTag(code, name);
        elementReferences.months.appendChild(optionTag);

    }
}

function getMonths() {
    return [{
            name: "Jan",
            code: "1"
        },
        {
            name: "Feb",
            code: "2"
        },
        {
            name: "Mar",
            code: "3"
        },
        {
            name: "Apr",
            code: "4"
        },
        {
            name: "May",
            code: "5"
        },
        {
            name: "Jun",
            code: "6"
        },
        {
            name: "Jul",
            code: "7"
        },
        {
            name: "Aug",
            code: "8"
        },
        {
            name: "Sep",
            code: "9"
        },
        {
            name: "Oct",
            code: "10"
        },
        {
            name: "Nov",
            code: "11"
        },
        {
            name: "Dec",
            code: "12"
        }];

}

function buildYearList() {

    for (var i = 2017 - 20; i <= 2017; i++) {
        var value = i;
        var text = i;
        var optionTag = buildOptionTag(value, text);
        elementReferences.years.appendChild(optionTag);
    }

}

//will get the references of all the elements.
function getElementReferences() {
    elementReferences.firstName = document.getElementById("txtFirstName");
    elementReferences.lastName = document.getElementById("txtLastName");
    elementReferences.terms = document.getElementById("chkTerms");
    elementReferences.countries = document.getElementById("ddlCountry");
    console.log(elementReferences);
    elementReferences.months = document.getElementById("ddlMonths");
    elementReferences.years = document.getElementById("ddlYears");
    elementReferences.days = document.getElementById("ddlDays");
}

function buildOptionTag(value, text) {
    var optionTag = document.createElement("option");
    optionTag.value = value;
    optionTag.textContent = text;
    return optionTag;
}

function loadDays() {
    var selectedMonth = elementReferences.months.value;
    console.log(selectedMonth);
    var numberOfDays = 31;
    if (selectedMonth == 1 || selectedMonth == 3) {
        numberOfDays = 31;
    } else if (selectedMonth == 2) {
        numberOfDays = 28;
    } else {
        numberOfDays = 30
    }
    elementReferences.days.innerHTML = "";
    for (var i = 1; i <= numberOfDays; i++) {
        var value = i;
        var text = i;
        var optionTag = buildOptionTag(value, text);
        elementReferences.days.appendChild(optionTag);
    }
}


function readData() {
    var user = {};
    user.firstName = elementReferences.firstName.value;
    user.lastName = elementReferences.lastName.value;
    user.country =document.querySelector('select[id=ddlCountry]').value;
    user.dob =
        elementReferences.months.value + "/" + elementReferences.days.value +"/"+ elementReferences.years.value ;
    user.terms = elementReferences.terms.checked;
    
   user.gender = document.querySelector('input[name=gender]:checked').value;
    console.log(user);

}

pageInit();






