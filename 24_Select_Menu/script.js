let selectfield = document.querySelector(".selectfield")
let selectfildtext = document.querySelector(".selectfildtext")
let options = document.querySelectorAll(".options")
let list = document.querySelector("#list")
let icon = document.querySelector("#Icon")

selectfield.onclick = ()=>{
    list.classList.toggle("hide")
    icon.classList.toggle("rotation")
}

for (option of options) {
    option.onclick = function(){
        selectfildtext.innerHTML = this.textContent
        list.classList.toggle("hide")
        icon.classList.toggle("rotation")
    }
}