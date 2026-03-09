const button = document.getElementById('button');
const popupWindow = document.getElementsByClassName('popup')[0]

button.addEventListener('click', function(){
    popupWindow.classList.add('view')
    console.log('fait')

    setTimeout(() => {
        popupWindow.classList.remove('view')
        console.log('good')
    }, 3000);
})