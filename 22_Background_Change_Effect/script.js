let imgbox = document.querySelector(".img-box")
let imgwrap = document.querySelector(".img-wrap")
let original = document.getElementById("original")
let line = document.getElementById("line")
console.log(imgbox.offsetWidth);

    original.style.width = imgbox.offsetWidth + "px"

let leftspace = imgbox.offsetLeft

imgbox.onmousemove = (e)=>{
    let boxwidth = (e.pageX - leftspace) + "px"
    imgwrap.style.width = boxwidth;
    line.style.left = boxwidth
}