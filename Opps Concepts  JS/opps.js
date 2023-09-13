// class Student{
//     constructor(firstName,lastName,age,dept,phoneNO,id,avgMarks){
//     this .firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.dept = dept 
//     this.id = id 
//     this.phoneNo = phoneNO 
//     this.avgMarks = avgMarks 
//     }
    
// }
// var Student1 = new Student("Vishnu","Shinde","26","IT",7218100100,9);
// console.log(Student1);


// firstName = "Vishnu"
    // lastName = "Shinde"
    // age = "26"
    // avgMarks = "85"
    // Roll_no ="83"
    // dept = "E&TC" 

    class Person{
        constructor(firstName,lastName){
            console.log("Person is parent constructor",firstName,lastName)
        }
    }
    class Student extends Person{
        constructor(firstName,lastName){
            super(firstName,lastName);
             this.firstName = firstName
             this.lastName = lastName

        }   
     }
var Student1 = new Student("John","Wick");
console.log(Student1)