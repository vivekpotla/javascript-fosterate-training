//In JavaScript, the this keyword refers to an object.
//Which object depends on how this is being invoked (used or called)

const student = {
    firstName: "VIVEK",
    lastName : "POTLA",
    id       : 6699,
    fullName () {
      return this.firstName + " " + this.lastName;
    }
  };
//here this operator points to the student object (locally)
  console.log(student.fullName())



//The Function call() Method

  const person1 = {
    fullName(){
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"Vivek",
    lastName: "Potla",
  }
  
  // Return "Vivek Potla":
  person1.fullName.call(person2);


  //With the bind() method, an object can borrow a method from another object.
  const human = {
    firstName:"Bear",
    lastName: "Grylls",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Vivek",
    lastName: "Potla",
  }
  
  let fullName = human.fullName.bind(member); // human is borrowing the member object




