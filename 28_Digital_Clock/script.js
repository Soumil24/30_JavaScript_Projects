let hour = document.querySelector("#hour")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")

let date = new Date()

if (date.getHours() < 10) {
    hour.innerHTML = "0" +  date.getHours()
} else {
    hour.innerHTML = date.getHours()
}
if (date.getMinutes() < 10) {
    min.innerHTML = "0" + date.getMinutes()
} else {
    min.innerHTML = date.getMinutes()
}
if (date.getSeconds() < 10) {
    sec.innerHTML = "0" + date.getSeconds()
} else {
    sec.innerHTML = date.getSeconds()
}