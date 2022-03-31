//print elements from 1 to 10 except 5

for( let i=1;i<=10;i++)
{
    if(i==5)
    continue; // continue skips the next part of the current iteration and 
    //continues to next iteration

    console.log(i)
}



//print 10-20 , stop if a multiple of 7 is encountered

for(let i=10 ;i<=20;i++)
{
    if(i%7==0)
    {   console.log(i , "is a multiple of 7 ");
        break;
    }
    else
    {
        console.log(i);
    }
}




//Javascript Lables*******************************************
let str= '';
console.log(" continue statement using labels")
loop1:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue loop1;
  }
  str = str + i;
}


console.log("The string is " , str);




//Break using labels 

console.log(" break statement using labels")
let z=15;

label2:
for(let i=10 ;i <=20;i++)
{   if (i===z)
    break label2;

    console.log(i);
}