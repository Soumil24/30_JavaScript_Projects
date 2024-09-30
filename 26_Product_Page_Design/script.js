let img = document.querySelector("#img")
let btn = document.querySelectorAll(".btn")

    btn[0].onclick = ()=>{
        img.src = "Assets/image1.png"
        for (bt of btn) {
            bt.classList.remove("active")
        }
        btn[0].classList.add("active")
    }
    btn[1].onclick = ()=>{
        img.src = "Assets/image2.png"
        for (bt of btn) {
            bt.classList.remove("active")
        }
        btn[1].classList.add("active")
    }
    btn[2].onclick = ()=>{
        img.src = "Assets/image3.png"
        for (bt of btn) {
            bt.classList.remove("active")
        }
        btn[2].classList.add("active")
    }
