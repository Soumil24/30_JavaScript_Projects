let form = document.querySelector(".form")
let searchinput = document.querySelector("#search")
let searchIt = document.querySelector("#searchIt")
let resultbox = document.querySelector(".result")
let Showbtn = document.querySelector("#Showbtn")
let Key = "AxFo91Qo-AwtLxZXLLeEbddgXpl-DRK-VB0m_4kSvoc"

let keyword = ""
let page
async function search() {
    keyword = searchinput.value
    // console.log(keyword);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Key}&per_page=12`
    const response =await fetch(url)
    const data = await response.json()
    // console.log(data);
    
    let result = data.results

    result.map((result)=>{
        let img = document.createElement('img')
        img.src = result.urls.small
        let imglink = document.createElement("a")
        imglink.href = result.links.html
        imglink.target = "_blank"
        
        imglink.appendChild(img)
        resultbox.appendChild(imglink)
    })
    Showbtn.style.display = "block"
    
}
searchIt.addEventListener("click",(e)=>{
    e.preventDefault()
    page = 1
    search()
})

Showbtn.addEventListener("click",()=>{
    page++
    search()
})