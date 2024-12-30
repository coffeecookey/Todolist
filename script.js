const inputbox=document.getElementById("inputbox")
const listcontainer=document.getElementById("listcontainer")
function AddTask() {
    if (inputbox.value==='') {
        alert("You must write something!");
    }
    else {
        let li= document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value=""
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
saveData();
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showTask();