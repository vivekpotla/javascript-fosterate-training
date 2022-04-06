

//object creation

//way-1

const student={
    name: "Vivek",
    rollNo: "105",
    section: 2,
    branch : "CSE"


};
console.log("The object is " ,student);

//accessing object properties
let ObjName= student.name;
let ObjBranch = student['branch'];
console.log("The accessed student name is",ObjName,"branch is" ,ObjBranch);



//way-2 (creating object)
var car=new Object();
car.name ="Fortuner";
car.brand="Toyota";
car.modelYear="2020";

console.log(car);


//way 3 (object constructor method)

function stud(id,name,branch){  
    this.id=id;  
    this.name=name;  
    this.branch=branch;  
    }  //The this keyword refers to the current object.
let s=new stud(103,"vivek","CSE");  
console.log(s);



//creating objects with methods
const person = {
    firstName: "Vivek",
    lastName: "Potla",
    language: "English",
   lang() { 
      return this.language;
    }
};
console.log(person.lang())


//Javascript object methods
// Initialize an object with properties and methods
const SampleObject = {
     name:"FakeObject",
     num:36,
    showDetails() {
       console.log(this.name , this.num);
    }
};

// Use Object.create to pass properties
const Obj1 = Object.create(SampleObject);
Obj1.showDetails();




// Initialize an object
const employees = {
	boss: 'John',
	secretary: 'Kepler',
	sales: 'Gandhi',
	accountant: 'Nehru'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);


//know the length of keys
const length = Object.keys(employees).length;
console.log(length);

//acess the values of objects
const values = Object.values(employees);
console.log(values);

// Object.entries() creates a nested array of the key/value pairs of an object.
const entries = Object.entries(employees);
console.log(entries);


// Loop through the results using entries as entries is now an array 
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});