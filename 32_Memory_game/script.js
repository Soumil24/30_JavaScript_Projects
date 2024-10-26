let moves = document.querySelector(".moves_count")
let timeValue = document.querySelector(".timer")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let gameContainer = document.querySelector(".game-container")
let controlContainer = document.querySelector(".control-container")
let result = document.querySelector("#result")

let cards;
let interval;
let firstCard = false
let secondCard = false

const item = [
    { name:"anaconda", image: "Assets/anaconda.png"},
    { name:"bee", image: "Assets/bee.png"},
    { name:"chameleon", image: "Assets/chameleon.png"},
    { name:"cockatoo", image: "Assets/cockatoo.png"},
    { name:"crocodile", image: "Assets/crocodile.png"},
    { name:"gorilla", image: "Assets/gorilla.png"},
    { name:"macaw", image: "Assets/macaw.png"},
    { name:"monkey", image: "Assets/monkey.png"},
    { name:"piranha", image: "Assets/piranha.png"},
    { name:"sloth", image: "Assets/sloth.png"},
    { name:"tiger", image: "Assets/tiger.png"},
    { name:"toucan", image: "Assets/toucan.png"},
]

let sec = 0
let min = 0

let movesCount = 0
let winCount = 0

const TimerGenerator = () => {
    
    sec += 1;
    if (sec>=60) {
        min += 1
        sec = 0
    }

    let secvalue = sec < 10 ? `0${sec}` : sec
    let minvalue = min < 10 ? `0${min}` : min
    timeValue.innerHTML = `<span>Time:</span>${minvalue}:${secvalue}`
}

const MovesCounter = ()=>{
    movesCount +=1
    moves.innerHTML = `<span>Moves:</span>${movesCount}`
}

const GeneratorRandom = (size=4) => {
    let tempArr = [...item]

    let cardValue= [];

    size = (size*size)/2

    for (let i = 0; i < size; i++) {
        const ramdomnumber = Math.floor(Math.random()*tempArr.length)
        cardValue.push(tempArr[ramdomnumber])
        tempArr.slice(ramdomnumber,1) 
    }
    return cardValue
}

const matrixGeneretor = (cardValue,size=4)=>{
    gameContainer.innerHTML=""
    cardValue = [...cardValue,...cardValue]
    cardValue.sort(()=> Math.random() - 0.5)
    for (let i = 0; i < size*size; i++) {
        gameContainer.innerHTML += `
        <div class="card-continer" data-card-value="${cardValue[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValue[i].image}"class="image"/>
        </div>
        </div>
        `
    }
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`

    cards = document.querySelectorAll(".card-continer")
    cards.forEach((card)=>{
        card.addEventListener("click",()=>{
            
            if (!card.classList.contains("matched")) {
                card.classList.add("flipped")
                if (!firstCard) {
                    firstCard = card
                    firstCardValue = card.getAttribute("data-card-value")
                }   
                else{
                    MovesCounter()
                    secondCard = card
                    let secondCardValue = card.getAttribute("data-card-value")
                    if (firstCardValue == secondCardValue) {
                        firstCard.classList.add("matched")
                        secondCard.classList.add("matched")
    
                        firstCard = false
    
                        winCount += 1
    
                        if (winCount == Math.floor(cardValue.length / 2)) {
                            result.innerHTML = `<h1>You Won</h1>
                            <h3>Moves:${movesCount}</h3>`
                            stopgame()
                        }
                    }
                    else{
                        let [tempfirst,tempsecond] = [firstCard,secondCard]
                        firstCard = false
                        secondCard = false
                        let delay = setTimeout(() => {
                            tempfirst.classList.remove("flipped")
                            tempsecond.classList.remove("flipped")
                        }, 900);
                    }
                }
            }
        })
    })
}
start.addEventListener('click',()=>{
    movesCount= 0
    timer = 0
    controlContainer.classList.add("hide")
    stop.classList.remove("hide")
    start.classList.add("hide")

    interval = setInterval(TimerGenerator, 1000);
    moves.innerHTML = `<span>Moves:</span>${movesCount}`
    initializer()
})

const initializer = () =>{
    result.innerHTML=""
    winCount= 0
    let cardValue=GeneratorRandom()
    console.log(cardValue);
    matrixGeneretor(cardValue)
}

stop.addEventListener(
    "click",
    (stopgame = ()=>{
        controlContainer.classList.remove("hide")
        stop.classList.add("hide")
        start.classList.remove("hide")
        clearInterval(interval)
    })
)