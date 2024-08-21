const input = document.querySelector("#Input")
const AddBt = document.querySelector("#Addbt")
let error = document.querySelector("#error")
let list = document.querySelector(".lis")


function Check() {
    Task = input.value;
    // console.log(Task);
    if(Task === ""){
        display("Enter The Task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = Task
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = '';
    SaveData();
}

function display(message) {
    error.innerHTML = `<h4>${message}</h4>` 
}

list.addEventListener('click', (e)=>{
    // console.log(e.target.tagName);
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        SaveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        SaveData();
    }
    
})
function SaveData() {
    localStorage.setItem("Data_to_do", list.innerHTML);
}
function Showdata() {
    list.innerHTML = localStorage.getItem("Data_to_do");
}
Showdata();