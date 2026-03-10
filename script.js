const button = document.getElementById('button');
const popupWindow = document.getElementsByClassName('popup')[0]

const saveButton = document.getElementById("save_button")
const nameInput = document.getElementById("name_input")
const welcomeTxt = document.getElementById("welcome_txt")
const nameValue = localStorage.getItem('name')

button.addEventListener('click', function(){
    popupWindow.classList.add('view')

    setTimeout(() => {
        popupWindow.classList.remove('view')
    }, 3000);
})

if (nameValue) {
    welcomeTxt.style.display = "block"
    welcomeTxt.innerHTML = "Bienvenue, " + nameValue
}

saveButton.addEventListener('click', function(){
    if (nameInput.value) {
        localStorage.setItem('name',nameInput.value)
    } else {
        alert("Vous devez remplir le champ de votre prénom")
    }
})

