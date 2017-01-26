// Build an array starting from 1997 to 2017

var yearList =[];
var monthsList=[];
var daysList =[];

var starting = 1997;
var end =2017;

for(var i=1997;i<=end;i++){
    //console.log(i);
    yearList.push(i);
}

for(var i=1;i<=12;i++){
    monthsList.push(i);
}

for(var i=1;i<=31;i++){
    daysList.push(i);
}
console.log(yearList);
console.log(monthsList);
console.log(daysList);