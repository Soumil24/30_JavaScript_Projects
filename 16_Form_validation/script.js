let NameError = document.querySelector("#Name-Error")
let PhoneError = document.querySelector("#Phone-Error")
let EmailError = document.querySelector("#Email-Error")
let MessageError = document.querySelector("#Message-Error")
let SubmitError = document.querySelector("#Submit-Error")

function ValidationName() {
    let Name = document.querySelector("#InputName").value

    if (Name.length == 0) {
        NameError.innerText = "Name Is Required"
        return false
    }
if(!Name.match(/^[A-Za-z]+ +[A-Za-z]+$/)){
        NameError.innerText = "Write Full Name"
        return false
    }
    NameError.innerHTML = '<i class="fa-solid fa-check" style="color: #00ff59;"></i>'
    return true
}
function ValidationPhone() {
    let Phone = document.querySelector("#InputPhone").value

    if (Phone.length == 0) {
        PhoneError.innerHTML = "Phone Number Is Required"
        return false
    }
    if (Phone.length !== 10) {
        PhoneError.innerHTML = "Phone Number Must Be 10 Digit"
        return false
    }
    // console.log(Phone.match(/^[0-9]{10}$/));
    if(!Phone.match(/^[7-9][0-9]{9}$/)){
        PhoneError.innerHTML = "Enter Valid Number"
        return false
    }
    PhoneError.innerHTML = '<i class="fa-solid fa-check" style="color: #00ff59;"></i>'
    return true
}
function ValidationEmail() {
    let Email = document.querySelector("#InputEmail").value

    if (Email.length == 0) {
        EmailError.innerHTML = "Email Is Required"
        return false
    }
    // console.log(Phone.match(/^[0-9]{10}$/));
    if(!Email.match(/^[a-zA-Z]+[0-9]+[@][A-Za-z]+[\.][a-z]{2,4}/)){
        EmailError.innerHTML = "Enter Valid Email"
        return false
    }
    EmailError.innerHTML = '<i class="fa-solid fa-check" style="color: #00ff59;"></i>'
    return true
}
function ValidationMessage() {
    let Message = document.querySelector("#InputMessage").value
    if (Message.length == 0) {
        MessageError.innerHTML = " Message Is Required"
        return false
    }
    if (Message.length < 30) {
        MessageError.innerHTML = 30 - Message.length + " Letter Required"
        return false
    }
    MessageError.innerHTML = '<i class="fa-solid fa-check" style="color: #00ff59;"></i>'
    return true
}
function ValidationForm() {
    if (!ValidationName() || !ValidationPhone() || !ValidationEmail() || !ValidationMessage) {
        SubmitError.style.display = 'block';
        SubmitError.innerHTML = " Please Fix The Error "
        setTimeout(() => {
            SubmitError.style.display = 'none'
        }, 3000);
        return false
    }
}