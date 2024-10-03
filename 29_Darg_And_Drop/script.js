let lists = document.querySelectorAll(".list")
let left = document.querySelector(".left")
let right = document.querySelector(".right")

for (list of lists) {
    list.addEventListener("dragstart",(e)=>{
        let select = e.target
        right.addEventListener("dragover",(e)=>{
            e.preventDefault()
        })
        right.addEventListener("drop",()=>{
            console.log(select);
            
            right.appendChild(select)
            select = null
        })
        left.addEventListener("dragover",(e)=>{
            e.preventDefault()
        })
        left.addEventListener("drop",()=>{
            console.log(select);
            
            left.appendChild(select)
            select = null
        })
    })
}