//for loop
console.log("For loop ");
for (let number = 1; number <= 5; number++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(number);
  }


//do while loop
console.log("Do while loop ");
let i = 1;
do {
  console.log(i);
  i++;
  } while (i <= 5);


//while loop
console.log("while loop ");
i=0;
while(i<5)
{
    console.log(++i);
}



//for in loop
console.log("for in loop ");
let a =[25,26,27,28 , 29,30];
//iterates over property names
for( let i in a )
{
    console.log(i)
}


//for of loop 
//iterates over property values
for( let i of a )
{
    console.log(i);
}
