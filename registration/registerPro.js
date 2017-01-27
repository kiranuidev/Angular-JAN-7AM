var elementReferences = {};

//Page initialization Logic
function pageInit() {
    getElementReferences();
    bindCountryList();
    bindMonthsList();
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
        var optionTag = document.createElement("option");
        optionTag.value = code;
        optionTag.textContent = name;
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
function bindMonthsList(){
    var months = getMonths();
    for (var i = 0; i < months.length; i++) {
        var code = months[i].code;
        var name = months[i].name;
        var optionTag = document.createElement("option");
        optionTag.value = code;
        optionTag.textContent = name;
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

    //will get the references of all the elements.
    function getElementReferences() {
        elementReferences.firstName = document.getElementById("txtFirstName");
        elementReferences.lastName = document.getElementById("txtLastName");
        elementReferences.terms = document.getElementById("chkTerms");
        elementReferences.countries = document.getElementById("ddlCountry");
        console.log(elementReferences);
        elementReferences.months = document.getElementById("ddlMonths");
    }



    pageInit();
