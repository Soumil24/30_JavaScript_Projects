let selectmenu = document.querySelector(".selectmenu")
let selectfield = document.querySelector(".selectfield")
let selectfildtext = document.querySelector(".selectfildtext")
let options  = document.querySelectorAll(".options")
let list = document.querySelector("#list")
let icon = document.querySelector("#Icon")
let button = document.querySelector("#button")
let score = document.querySelector(".score")
let name1 = document.querySelector("#Name1")
let run1 = document.querySelector("#run1")
let wicket1 = document.querySelector("#wicket1")
let over1 = document.querySelector("#Over1")
let name2 = document.querySelector("#Name2")
let run2 = document.querySelector("#run2")
let wicket2 = document.querySelector("#wicket2")
let over2 = document.querySelector("#Over2")
const Key = "555e5115-3246-48e2-89d0-2835e68b8365&offset=0";
let data;
let Id;
async function getData() {
    const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=555e5115-3246-48e2-89d0-2835e68b8365&offset=0");
    const json = await response.json();
    console.log(json.data);
    data = json.data
    json.data.forEach(element => {
        let li = document.createElement('li')
        li.classList.add("options")
        li.innerHTML = element.name
        li.setAttribute('id', element.id);
        let img = document.createElement("img")
        if (element.matchEnded) {
            img.src = "./Assets/Green-Dot-PNG-HD.png"
        } else {
            img.src = "./Assets/Red-Dot-PNG-HD-200x200.png"
        }
        list.appendChild(li)
        // console.log(li);
        li.appendChild(img)
        // console.log(element.name);
        options = document.querySelectorAll(".options")
        // console.log(options);
        
    }); 
    options.forEach(element => {
        element.onclick = function () {
            selectfildtext.innerHTML = this.textContent
            Id = this.id
            console.log(Id);
            list.classList.toggle("hide")
            icon.classList.toggle("rotation")
            button.style.display = "block";
        }
    });
}
options.forEach(element => {
    element.onclick = function () {
        selectfildtext.innerHTML = this.textContent
        Id = this.id
        console.log(Id);
        list.classList.toggle("hide")
        icon.classList.toggle("rotation")
        button.style.display = "block";
    }
});
selectfield.onclick = () => {
    list.classList.toggle("hide")
    icon.classList.toggle("rotation")
}
button.onclick = ()=>{
    selectmenu.style.display = "none"
    score.style.display = "flex"
    data.forEach(element => {
        if (Id == element.id) {
            name1.innerHTML = element.teams[0]
            name2.innerHTML = element.teams[1]
            run1.innerHTML = element.score[0].r
            wicket1.innerHTML = element.score[0].w
            over1.innerHTML = element.score[0].o
            run2.innerHTML = element.score[1].r
            wicket2.innerHTML = element.score[1].w
            over2.innerHTML = element.score[1].o
        }
    });
}
getData()