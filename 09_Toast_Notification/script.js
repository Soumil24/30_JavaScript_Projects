let toastbox = document.querySelector(".toastbox")
let SuccessMsg = '<i class="fa-solid fa-square-check"></i>Successfully Submitted'
let ErrorMsg = '<i class="fa-solid fa-triangle-exclamation"></i>Please Fix The Error'
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check Again'
function show(Message) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = `${Message}`
    toastbox.appendChild(toast)

    if(Message.includes('Error')){
        toast.classList.add('Error')
    }
    if(Message.includes('Invalid')){
        toast.classList.add('Invalid')
    }

    setTimeout(()=>{
        toast.remove()
    },6000)
}