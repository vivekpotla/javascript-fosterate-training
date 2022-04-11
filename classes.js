//classes are templates for creating objects


/*class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
 */

/* An important difference between function declarations and class declarations is that 
  while functions can be called in code that appears before they are defined,
  classes must be defined before they can be constructed.*/

  class Rectangle {
    


    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.calcArea()); // 100



  //private in classes

  class Sample {
    #property;
  
    constructor(){
      this.#property = "sample data";
    }
     
    //private method (cannot be accessed directly using object.property())
    #privateMethod() {
      return 'hello world';
    }
  
    getPrivateMessage() {
        return this.#property;
    }
  }
  
  const object = new Sample();
  // console.log(object.property); //=> undefined
  // console.log(object.privateMethod); // undefined
  console.log(object.getPrivateMessage()); //test

  
  
