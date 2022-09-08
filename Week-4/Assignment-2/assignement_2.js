
var Person = function(){}

Person.prototype.initialize = function(name,age){
    this.name = name;
    this.age = age;
}

function Teacher(){
    Person.call(this)
}

Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)


var him = new Teacher();

him.initialize("Adam",45);
him.teach("Inheritance") // Adam is now teaching Inheritance





//########################################################################################
// class Person{
//     constructor(){}
//     initialize(name,age){
//         this.name = name;
//         this.age=age
//     }
// }

// class Teacher extends Person{
//     constructor(name){
//         super(name)
//     }
//     teach(subject){
//         console.log(`${this.name} is now teaching ${subject}`)
//     }
// }
