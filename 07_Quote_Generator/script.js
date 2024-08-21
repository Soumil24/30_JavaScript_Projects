const Content = document.querySelector("blockquote")
const Author = document.querySelector("span")
const New = document.querySelector("#New")
const X = document.querySelector("#X")

const ApiUrl = "https://api.quotable.io/random"
async function quote(url) {
    const respones = await fetch(url)
    let data = await respones.json()
    console.log(data)
    Display(data)
}

function Display(data) {
    Content.innerHTML = `${data.content}`
    Author.innerHTML = `${data.author}`
}

New.addEventListener('click', ()=> {
    quote(ApiUrl);
    New.innerText = "Regenerate"
})

X.addEventListener("click",()=>{
    window.open(`https://twitter.com/intent/tweet?text=${Content.innerHTML}`,"X Window", "width=600, height=300")
})