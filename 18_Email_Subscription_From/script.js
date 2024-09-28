const scriptURL = 'https://script.google.com/macros/s/AKfycbzKmhK05yvRdTCq53_h1LR6e8JDHR_ZtfQBDf9Rh0RqHvo6bpJcF2iRfFoSlyyjjg9Pxg/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.querySelector("#Sucess")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            message.innerHTML = "Thank You For Subscribing!"
            setTimeout(() => {
                message.innerHTML = ""
                form.reset()
            }, 4000);
      })
      .catch(error => console.error('Error!', error.message))
  })