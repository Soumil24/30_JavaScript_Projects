let text = document.querySelector("#input")
let btn = document.querySelector("#btn")
let imgbox = document.querySelector(".Qrcode")
let Img = document.querySelector("#Qr")

btn.addEventListener("click", ()=>{
    Img.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    imgbox.classList.add("show-img")
})