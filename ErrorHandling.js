
//***************************ERROR HANDLING ********************** */

//SYNTAX
/*
try
{
    // code that may throw an error
}
catch(ex)
{
    // code to be executed if an error occurs
}
finally{
    // code to be executed regardless of an error occurs or not
}
*/



try
{
    throw "Error in try block";
}
catch(error)
{
    console.error("The error is : ",error);
}


//we can throw an OBJECT if error occurs
try 
{
    throw {
        number: 101,
        message: "Error occurred"
    };
}
catch (error) {
    console.error(`${error.number}- ${error.message}`);
}



//Error object is thrown when error is occured and it has two properties
//1. error.name
//2. error.message

try{  
    var a= [3,4,5]; //a is an array  
    console.log(a);    // displays elements of a  
    console.log(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked  
    }
    
    catch(e)
    {  
         console.log(`The error generated is : ${e.message}`); //Handling error  
    }  



//A finally block contains all the crucial statements that must be executed whether exception occurs or not. 
    

try{  
       
    var a=2;       
    if(a==2)        
    console.log("True");        
}  
catch(Error)
{  
        console.log(`Error found :${e.message}`);  
        
    }  
finally
{  
        console.log("Value of a is 2 ");  
}      