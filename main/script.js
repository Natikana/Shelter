const hamb = document.querySelector('#hamb');
const menu = document.querySelector('.menu');
const darkShadow = document.querySelector('.dark_shadow');

hamb.addEventListener('click', hambHandler);

function hambHandler (event) {
    event.preventDefault(); 
    menu.classList.toggle('active');
    hamb.classList.toggle('active');
    darkShadow.classList.toggle('active');
}

