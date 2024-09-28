const pass = document.querySelector("#Pass")
const result = document.querySelector("#result")
pass.addEventListener('input',()=>{
    if (pass.value.length > 0) {
        result.style.display = "block";
    }
    else{
        result.style.display = "none";
    }
    if (pass.value.length < 4){
        result.innerHTML = "Password is Weak"
        result.style.color = "red"
        pass.style.borderColor = "red"
    }
    if (pass.value.length >= 4 && pass.value.length < 8) {
        result.innerHTML = "Password is Medium"
        result.style.color = "Yellow"
        pass.style.borderColor = "Yellow"
    }
    if (pass.value.length >= 8) {
        result.innerHTML = "Password is Strong"
        result.style.color = "green"
        pass.style.borderColor = "green"
    }
})