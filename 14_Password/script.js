let input = document.querySelector("#input")
let img = document.querySelector("#img")

img.addEventListener("click",()=>{
    if (input.type == "password") {
        input.type = "text"
        img.src = "assets/eye-close.png"
    }
    else{
        input.type ="password"
        img.src = "assets/eye-open.png"
    }
})