const hamb = document.querySelector('#hamb');
const menu = document.querySelector('.menu');
const darkShadow = document.querySelector('.dark_shadow');
const menuLink = document.querySelectorAll('.menu_link');


hamb.addEventListener('click', hambHandler);

function hambHandler (event) {
    event.preventDefault(); 
    menu.classList.toggle('active');
    hamb.classList.toggle('active');
    darkShadow.classList.toggle('active');
}

darkShadow.addEventListener('click', closeMenu);

function closeMenu () {
    darkShadow.classList.remove('active');
    menu.classList.remove('active');
    hamb.classList.remove('active');
}
// function closeMenuByLink () {
    for (let link of menuLink ) {
        link.addEventListener('click', closeMenu); 
    }
// } 



      

    
