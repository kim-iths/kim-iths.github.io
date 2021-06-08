


const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

window.onload=function(){
   
  
form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '') {
        messages.push('E-mail adress is required')
    }

    if(email.value.length <= 10){
        messages.push('Email must be longer than 10 characters')
    }

    if(email.value.length >= 20){
        messages.push('Email must be shorter than 20 characters')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }

})
}
