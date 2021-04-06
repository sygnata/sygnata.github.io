import scrollRevealTitle from './modules/scrollRevealTitle.js';
import initSmokeEffect from './modules/initSmokeEffect.js';
import initScrollSuave from './modules/initScrollSuave.js';
import initiBackToTop from './modules/initiBackToTop.js';
import initAnimacaoScroll from './modules/initAnimacaoScroll.js';
import initAnimacaoScroll1 from './modules/initAnimacaoScroll1.js';
import initKonamiCode1 from './modules/initKonamiCode1.js';

scrollRevealTitle();
initSmokeEffect();
initScrollSuave();
initiBackToTop();
initAnimacaoScroll();
initAnimacaoScroll1();
initKonamiCode1();

/*Konami Code*/


function initKonamiCode2() {
	let coelho = document.querySelector('#coelho');
	coelho.addEventListener('mouseover', function (evento) {
		console.log(evento)

		// console.log('Você ACERTOU a sequencia!!!')
		// document.querySelector('#winScreen').dataset.status = 'active'
		// document.querySelector('#winScreen').innerHTML = "SARAH TE AMO!!!"
		window.scrollTo(0, 0);
		document.querySelector('#matrix').classList.toggle('active');


	});
}
initKonamiCode2();