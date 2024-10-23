const red=document.getElementById("red");
const yellow=document.getElementById("yellow");
const green=document.getElementById("green");
const circle=document.getElementsByClassName("div-13")[0];

red.addEventListener("mousedown",(event)=>{
     console.log(event);
     circle.style.backgroundColor="red";

})

yellow.addEventListener("mousedown",(event)=>{
     console.log(event);
     circle.style.backgroundColor="yellow";
})

green.addEventListener("mousedown",(event)=>{
     console.log(event);
     circle.style.backgroundColor="green";
})