let FinalData = new Date("dec 29, 2026 00:00:00").getTime()
// console.log(FinalData);
let x = setInterval(() => {
    let CurrentDate = new Date().getTime()
    let direction = FinalData - CurrentDate

    let days = Math.floor(direction / (1000 * 60 * 60 * 24));
    let hours = Math.floor((direction % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((direction % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((direction % (1000 * 60)) / 1000);

    document.querySelector("#d").innerHTML = days
    document.querySelector("#h").innerHTML = hours
    document.querySelector("#m").innerHTML = minutes
    document.querySelector("#s").innerHTML = seconds

    if (direction < 0) {
        clearInterval(x)
        document.querySelector("#d").innerHTML = "00"
        document.querySelector("#h").innerHTML = "00"
        document.querySelector("#m").innerHTML = "00"
        document.querySelector("#s").innerHTML = "00"
    }
}, 1000);
