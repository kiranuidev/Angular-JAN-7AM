(
    function () {

        function Person() {
            this.firstName = "";
            this.lastName = "";
            this.dob = "";
        }

        var student = new Person();
        student.firstName = "kiran";
        student.lastName = "PVS";
        student.dob = "11/1/1996";
        student.fee = "10000";

        var faculty = new Person();
        faculty.firstName = "Ravi";
        faculty.lastName = "K";
        faculty.dob = "11/11/1960";
        faculty.salary = "40000";

        var engineeringFaculty = new Object(faculty);
        
        Person.prototype.calculateAge = function () {
            console.log(this.dob);
        };



        engineeringFaculty.calculateAge();
        faculty.calculateAge();



    }
)();
