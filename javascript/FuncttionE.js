const btn=document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.altKey);
    console.log(e.x,e.y);
})