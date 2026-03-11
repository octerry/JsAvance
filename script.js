let form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault();
    
    let pseudo = document.querySelector('#pseudo')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let password2 = document.querySelector('#password2')
    
    let messageError = document.querySelector('.message-error')
    messageError.style.display = 'none'
    messageError.innerHTML = ''

    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )
    // let emailCheck = new RegExp(
    //     "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    // )

    if(pseudo.value == '' || pseudo.value.length < 6) {
        // pseudo error
        pseudo.classList.add('error')
        pseudo.classList.remove('success')
        let li = document.createElement("li");
        li.innerHTML = "Pseudo trop court"
        messageError.appendChild(li)
        messageError.style.display = "block"
    } else {
        // pseudo success
        pseudo.classList.add('success')
        pseudo.classList.remove('error')
    }

    if(email.value == ''){
        // email error
        email.classList.add('error')
        email.classList.remove('success')
        let li = document.createElement("li");
        li.innerHTML = "Champ email vide"
        messageError.appendChild(li)
        messageError.style.display = "block"
    } else {
        // email success
        email.classList.add('success')
        email.classList.remove('error')
    }

    console.log(password.value.length)
    if(password.value.length < 10 || passCheck.test(password.value) == false) {
        // password error
        password.classList.add('error')
        password.classList.remove('success')
        let li = document.createElement("li");
        li.innerHTML = "Mot de passe invalide"
        messageError.appendChild(li)
        messageError.style.display = "block"
    } else {
        // password success
        password.classList.add('success')
        password.classList.remove('error')
    }

    if(password2.value.length === 0 || password.value != password2.value) {
        // password2 error
        password2.classList.add('error')
        password2.classList.remove('success')
        let li = document.createElement("li");
        li.innerHTML = "Le second mot de passe ne correspond pas"
        messageError.appendChild(li)
        messageError.style.display = "block"
    } else {
        // password2 success
        password2.classList.add('success')
        password2.classList.remove('error')
    }
})