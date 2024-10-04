let hour = document.querySelector("#hour")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")
setInterval(() => {

let date = new Date()

    hour.innerHTML = (date.getHours()<10?"0":"") + date.getHours()
    min.innerHTML = (date.getMinutes()<10?"0":"") + date.getMinutes()
    sec.innerHTML = (date.getSeconds()<10?"0":"") + date.getSeconds()
}, 1000);