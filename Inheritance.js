//for inheritance extends keyword is used in javascript at defining the child class
// parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class using extends keyword 
class Student extends Person {

}

let student1 = new Student('Vivek');
student1.greet();



//JavaScript super() keyword
//The super keyword used inside a child class denotes its parent class

class StudentTwo extends Person {

    constructor(name) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        super(name); //super() here acts as super class constructor
    }

}

let student2 = new StudentTwo('Vivek');
student2.greet();




//Overriding the properties
// inheriting parent class
class StudentThree extends Person {

    constructor(name) {
        
        // call the super class constructor and pass in the name parameter
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let s1 = new StudentThree('Jack');
s1.greet();