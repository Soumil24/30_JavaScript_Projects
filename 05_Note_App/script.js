const btn = document.querySelector(".btn");
const container2 = document.querySelector(".container2");
function DataSet() {
    console.log("set data");
    localStorage.setItem("Data_note",container2.innerHTML);
}
function DataGet() {
    console.log("get data");
    container2.innerHTML = localStorage.getItem("Data_note");
}
btn.addEventListener("click",()=>{
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.src="Assets/delete.png";
    p.className= "note";
    p.setAttribute("contenteditable","true");
    container2.appendChild(p).appendChild(img);
})

container2.addEventListener("click",(e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        DataSet(); 
    }
    else if (e.target.tagName === "P"){
        note = document.querySelectorAll(".note")
        note.forEach(nt => {
            nt.onkeyup = function onkey(){
                DataSet();           
            }
        });
    }
    console.log(e.target.tagName);
})
DataGet();