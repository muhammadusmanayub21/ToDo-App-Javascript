const inputBox  = document.getElementById("input-box");
const list  = document.getElementById("all-list");

function AddTask(){
    if(inputBox.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.className="delete";
        span.innerHTML='\u00d7';
        li.appendChild(span);
        }
        inputBox.value='';
        saveData();

}
// delete the item from the list when click on it
list.addEventListener("click",function (e) { 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    },false);

function saveData(){
    // create an array to store all tasks in local storage

    localStorage.setItem("data",list.innerHTML);

}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask()