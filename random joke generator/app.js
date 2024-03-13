const Url="https://v2.jokeapi.dev/joke/Programming,Pun,Spooky?blacklistFlags=religious,racist,sexist";
const jokeContainer=document.querySelector(".jokeContainer");
const btn=document.querySelector(".btn");
let getJoke=async ()=>{
    let res=await fetch(Url)
    let get=await res.json();
    jokeContainer.textContent=`${get.setup}\n${get.delivery}`;
}
btn.addEventListener("click",getJoke);