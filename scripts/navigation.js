const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});