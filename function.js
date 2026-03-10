const button = document.getElementById('button');
const popupWindow = document.getElementsByClassName('popup')[0]

button.addEventListener('click', function(){
    popupWindow.classList.add('view')

    setTimeout(() => {
        popupWindow.classList.remove('view')
    }, 3000);
})