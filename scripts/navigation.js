$(document).ready(main);
var contador = 1;
function main(){
	$('.menu_bar').click(function(){
		if(contador == 1){
			$('nav').animate({
                left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};

const date = new Date(document.lastModified);

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
menuButton.addEventListener('click', () => {
menuButton.classList.toggle('active');
});