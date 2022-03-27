//function without return type
function print(n){
    console.log(n);
}
print(10);



//functions without arguments
function reminder()
{
    console.log('Reminder , please work ')
}
reminder();


// functions with arguments
function rectangleArea(width, height) {
    let area = width * height;
    return area;
  }
console.log(rectangleArea(5, 7)) 


//functions with default arguments
function message(name = 'Vivek') {
    console.log(`Hello, ${name}!`)
  }
   
message('Fosterate') ;
message();


// function expression 

const Area = function (width , height ){
    const area= width * height ;
    return area;
}

console.log('The area is ',Area(5,4));


/**************************************/

//arrow functions
const rectangleArea1 = (width, height) => {
    let area = width * height;
    return area;
};

console.log(rectangleArea1(5,6));


/* 
const squareNum = (num) => {
    return num * num;
  };   
*/

// in the above function if there is only one line in body 
// i.e only return statement , we omit the keyword return 

const squareNum = num => num * num;
console.log(squareNum(5))