let date = document.querySelector(".date")
let day = document.querySelector(".day")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let currentdate = new Date()
// console.log(date);

let Allday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let Allmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]

date.innerHTML = currentdate.getDate()
day.innerHTML = Allday[currentdate.getDay()]
month.innerHTML = Allmonth[currentdate.getMonth()]
year.innerHTML = currentdate.getFullYear()