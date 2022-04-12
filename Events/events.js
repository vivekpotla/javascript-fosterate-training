/*Mouse Events */


//select a button for onclick event 
let btn1= document.getElementById("on-click-button")

//select a button for OnmouseOver event
let btn2=document.getElementById("on-mouseover")

//select a button for the onmouseout event
let btn3=document.getElementById("on-mouseout")



 btn1.addEventListener('click',()=>{  
    document.getElementById("onclick").innerHTML += "Hello World <br/>";
})

btn2.addEventListener('mouseover',()=>{  
    document.getElementById("mouseover").innerHTML += "Mouse Over Event <br/>";
})

btn3.addEventListener('mouseout',()=>{  
    document.getElementById("mouseout").innerHTML += "MouseOut Event <br/>";
})