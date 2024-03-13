let listContainer=document.getElementById("list-contaner");
let inputBox=document.getElementById("input-box");
let btn1=document.querySelector(".btn1");
function addTask(){
    if(inputBox.value ===""){
        alert("Please add a Task First");
    }
    else{
        let task =document.createElement('li');
        task.innerText=inputBox.value;
        listContainer.appendChild(task);
        let span=document.createElement('span');
        span.textContent='\u00d7';
        task.appendChild(span);
        task.addEventListener("click",()=>{
            task.classList.toggle("checked");
            saveData();
        });
        span.addEventListener('click',()=>{
                span.parentElement.remove();
                saveData();
        });
    }
    inputBox.value='';

}
btn1.addEventListener("click",addTask);
function saveData(){
    localStorage.setItem("task",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('task');
}
showData();

