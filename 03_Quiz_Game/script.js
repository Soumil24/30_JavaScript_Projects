const questions = [
    {
        question: "The National Song of India was composed by",
        ans: [
            {text: "Rabindranath Tagore",correct : false},
            {text: "Bankim Chandra Chatterji",correct : true},
            {text: "Iqbal",correct : false},
            {text: "Jai Shankar Prasad",correct : false},
        ]
    },
    {
        question: "The main examples of Rabi crop are",
        ans: [
            {text: "wheat, barley, peas, rapeseed, mustard, grams",correct : true},
            {text: "rice, jowar, barley, wheat",correct : false},
            {text: "peas, maize, cotton and jute",correct : false},
            {text: "All of the above",correct : false},
        ]
    },
    {
        question: "Which language is spoken in Karnataka?",
        ans: [
            {text: "Marathi",correct : false},
            {text: "Hindi",correct : false},
            {text: "Malayalam",correct : false},
            {text: "Kannada",correct : true},
        ]
    },
    {
        question: "The members of a State Commission can be removed by the",
        ans: [
            {text: "governor on a report by the Supreme Court",correct : false},
            {text: "governor on a resolution passed by Parliament",correct : false},
            {text: "president on a report by the Supreme Court",correct : true},
            {text: "president on a resolution passed by Parliament",correct : false},
        ]
    },
    {
        question: "What is the function of a dynamo?",
        ans: [
            {text: "To convert heat energy into light energy",correct : false},
            {text: "To convert light energy into heat energy",correct : false},
            {text: "To convert mechanical energy into electrical energy",correct : true},
            {text: "To convert electrical energy into mechanical energy",correct : false},
        ]
    }
];
let que = document.querySelector(".question")
let ansbt = document.querySelector(".AnsBtu")
let nextbt = document.querySelector("#next")

let currentqueIndex = 0;
let score = 0;

function startQuiz() {
    currentqueIndex = 0;
    score = 0;
    nextbt.innerText = "Next";
    ShowQue();
}
function ShowQue() {
    resetStat();
    let currentQue = questions[currentqueIndex];
    let queno = currentqueIndex + 1;
    que.innerText = queno + ". " + currentQue.question;

    currentQue.ans.forEach(ans =>
    {
        const button = document.createElement("button")
        button.innerHTML = ans.text;
        button.classList.add("btu")
        ansbt.appendChild(button)
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectans)
    });
}
function resetStat() {
    nextbt.style.display = "none";
    while (ansbt.firstChild){
        ansbt.removeChild(ansbt.firstChild)
    }
}
function selectans(e) {
    const selectbt = e.target;
    const iscorrect = selectbt.dataset.correct === "true";
    if(iscorrect){
        selectbt.classList.add("correct");
        score++;
    }
    else{
        selectbt.classList.add("incorrect");
    }
    Array.from(ansbt.children).forEach( button => {
        if (button.dataset.correct === "true")  {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbt.style.display = "block";
}
function showscore() {
    resetStat()
    que.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextbt.innerHTML = "Play Again"
    nextbt.style.display = "block";
}
function handlenextbt() {
    currentqueIndex++;
    if(currentqueIndex< questions.length){
        ShowQue()
    }
    else{
        showscore()
    }
}

nextbt.addEventListener("click",()=>{
if(currentqueIndex < questions.length){
    handlenextbt()
}
else{
    startQuiz();
}
})
startQuiz();