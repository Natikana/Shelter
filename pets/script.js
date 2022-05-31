const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const body = document.body;

burger.addEventListener('click', hambHandler);

function hambHandler (event) {
    event.preventDefault();
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('noscroll');

   
}

