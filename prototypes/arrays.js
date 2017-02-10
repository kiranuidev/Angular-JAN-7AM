(
 function(){
     Array.prototype.limitTo=function(data){
         console.log(data);
         console.log(this.length);
         if(this.length>data){
            return this.slice(0,data);
         }
         return this;
     };
     var students = [1,2,3,4,5];
     
    var result=  students.limitTo(6);
     console.log(result);
 }
)();