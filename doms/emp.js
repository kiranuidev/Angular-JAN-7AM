var employees =[{employeeId:1,employeeName:"Kiran"},
               {employeeId:2,employeeName:"Ravi"}];

var tableEmployees = document.getElementById("tblEmployees");
for(var i=0;i<employees.length;i++){
    //console.log(employees[i]);
    //create tr employee[i]
    createTr(employees[i]);
}

function createTr(emp){
    console.log(emp);
    var trTag = document.createElement("tr");
   
    var tdTagForId = document.createElement("td");
    tdTagForId.innerHTML=emp.employeeId;
     var tdTagForEmpName = document.createElement("td");
    tdTagForEmpName.innerHTML = emp.employeeName;
    
    trTag.appendChild(tdTagForId);
    trTag.appendChild(tdTagForEmpName);
    tableEmployees.appendChild(trTag);
    //console.log(trTag);
    /*console.log(tdTagForId);
    console.log(tdTagForEmpName);*/
    
    
}