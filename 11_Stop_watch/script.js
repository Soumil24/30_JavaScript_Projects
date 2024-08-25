let display = document.querySelector(".displayTime")
let seconds = 0;
let hours = 0;
let minutes = 0;
let timer = null
function Stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0
        minutes++
        if (minutes == 60) {
            minutes = 0 
            hours++
        } 
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = h + " : " + m + " : " + s
    console.log(seconds,hours,minutes);
}
function Start() {
    if (timer !== null) {
        clearInterval(timer)
        timer = null
    }
    else{
    timer = setInterval(Stopwatch, 1000);
    }
}
function Stop() {
    clearInterval(timer)
    timer=null
}

function Reset() {
    clearInterval(timer)
    seconds = 0;
    hours = 0;
    minutes = 0;
    display.innerHTML = "00 : 00 : 00"
    timer=null
}