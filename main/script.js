const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menuList = document.querySelector('.menu_list').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', hambHandler);
function hambHandler (event) {
    event.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('.noscroll');

    renderMenu();
}

function renderMenu () {
    popup.appendChild(menuList);
} 
