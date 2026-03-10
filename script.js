const button = document.getElementById('button');
const popupWindow = document.getElementsByClassName('popup')[0]

const saveButton = document.getElementById("save_button")
const nameInput = document.getElementById("name_input")
const welcomeTxt = document.getElementById("welcome_txt")
const nameValue = localStorage.getItem('name')

const root = document.documentElement
const varInputs = document.getElementsByClassName('var_input')
const textInput = varInputs[0].children[1]
const borderInput = varInputs[1].children[1]
const paddingInput = varInputs[2].children[1]
const colorInput = varInputs[3].children[1]

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


let size = textInput.value/5 + 10 + "px"
let radius = borderInput.value/5 + "px"
let padding = paddingInput.value/10 + 5 + "px"
let color = colorInput.value
root.style.setProperty("--buttonTextSize", size)
root.style.setProperty("--buttonBorderRadius", radius)
root.style.setProperty("--buttonPadding", padding)
root.style.setProperty("--buttonBgColor", color)

textInput.addEventListener('input', function(){
    let size = this.value/5 + 10 + "px"
    root.style.setProperty("--buttonTextSize", size)
    varInputs[0].children[2].innerHTML = size
})

borderInput.addEventListener('input', function(){
    let radius = this.value/5 + "px"
    root.style.setProperty("--buttonBorderRadius", radius)
    varInputs[1].children[2].innerHTML = radius
})

paddingInput.addEventListener('input', function(){
    let padding = this.value/10 + 5 + "px"
    root.style.setProperty("--buttonPadding", padding)
    varInputs[2].children[2].innerHTML = padding
})

colorInput.addEventListener('input', function(){
    let color = this.value
    console.log(color)
    root.style.setProperty("--buttonBgColor", color)
})