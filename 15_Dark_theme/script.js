let img = document.querySelector("#Click")
img.onclick = function (){
    document.body.classList.toggle("dark-Theme")
    if (document.body.classList.contains("dark-Theme")) {
        img.src = "Assets/sun.png"
    } else {
        img.src = "Assets/moon.png"
    }
}