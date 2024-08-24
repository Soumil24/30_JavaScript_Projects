let song = document.querySelector("#song")
let progress = document.querySelector("#Progress")
let control = document.querySelector("#control")

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause() {
    if(control.classList.contains("fa-pause")){
        song.pause();
        control.classList.add("fa-play")
        control.classList.remove("fa-pause")
    }
    else{
        song.play()
        control.classList.remove("fa-play")
        control.classList.add("fa-pause")
    }
}
if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}
progress.addEventListener('click',()=>{
    song.currentTime = progress.value
    song.play()
    control.classList.add("fa-pause")
    control.classList.remove("fa-play")
})
song.pause()