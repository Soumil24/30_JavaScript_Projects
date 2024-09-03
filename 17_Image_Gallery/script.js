let scrollCon = document.querySelector(".gallery")
let nextbtn = document.querySelector("#Nextig")
let backbtn = document.querySelector("#Backig")

scrollCon.addEventListener('wheel',(e)=>{
    e.preventDefault();
    scrollCon.scrollLeft += e.deltaY
    scrollCon.style.scrollBehavior = "auto"
})

nextbtn.addEventListener('click',()=>{
    scrollCon.style.scrollBehavior = "smooth"
    scrollCon.scrollLeft += 900
})
backbtn.addEventListener('click',()=>{
    scrollCon.style.scrollBehavior = "smooth"
    scrollCon.scrollLeft -= 900
})