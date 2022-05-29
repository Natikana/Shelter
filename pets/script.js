const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const body = document.body;
const menuList = document.querySelector('.menu_list').cloneNode(1);

burger.addEventListener('click', hambHandler);

function hambHandler (event) {
    event.preventDefault();
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('noscroll');

    renderMenu();
}

function renderMenu () {
    popup.appendChild(menuList);
}
