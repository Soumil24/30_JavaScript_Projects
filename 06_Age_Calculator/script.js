const Input = document.querySelector("#date");
Input.max = new Date().toISOString().split("T")[0];
let Ans = document.querySelector(".ans");



function CalAge() {
    let bDate = new Date(Input.value);

    let d1 = bDate.getDate();
    let m1 = bDate.getMonth() + 1;
    let y1 = bDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3,m3,y3;

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 -m1;
    } else {
        y3--;
        m3 = 12 +m2 -m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1
    }
    if (m3>0) {
        m3 = 11;
        y3--;
    }
    // console.log(y3,m3,d3);
    print(y3,m3,d3)
}
function getDaysInMonth(year,month) {
    return new Date(year,month,0).getDate();
}
function print(year, month,day) {
    Ans.innerHTML = ` <span>${year}</span> Year <span>${month}</span> Month And <span> ${day} </span> Day...`
}