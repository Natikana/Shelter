const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');
const darkShadow = document.querySelector('.dark_shadow');

burger.addEventListener('click', hambHandler);

function hambHandler (event) {
    event.preventDefault(); 
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    darkShadow.classList.toggle('active');
}

