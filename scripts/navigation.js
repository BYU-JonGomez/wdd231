const menuButton = document.getElementById('myButton');
const menuLinks = document.querySelector('ul.menuLinks');

menuButton.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
  menuButton.classList.toggle('open'); // Add this line
});