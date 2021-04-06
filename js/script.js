import scrollRevealTitle from './modules/scrollRevealTitle.js';
import initSmokeEffect from './modules/initSmokeEffect.js';
import initScrollSuave from './modules/initScrollSuave.js';
import initiBackToTop from './modules/initiBackToTop.js';
import initAnimacaoScroll from './modules/initAnimacaoScroll.js';
import initAnimacaoScroll1 from './modules/initAnimacaoScroll1.js';

scrollRevealTitle();
initSmokeEffect();
initScrollSuave();
initiBackToTop();
initAnimacaoScroll();
initAnimacaoScroll1();

/*Konami Code*/
function initKonamiCode1() {
	const codigoSecreto = 'sarah';
	let temporizador;
	let sequenciaDeCaracteres = [];

	// 1 - Sequencia de caracteres
	window.addEventListener('keydown', function (evento) {
		clearTimeout(temporizador);
		const teclaPressionada = evento.key;

		sequenciaDeCaracteres.push(teclaPressionada);

		const fraseComCaracteres = sequenciaDeCaracteres.join('');

		if (fraseComCaracteres.includes(codigoSecreto)) {
			// console.log('Você ACERTOU a sequencia!!!')
			// document.querySelector('#winScreen').dataset.status = 'active'
			document.querySelector('#winScreen').innerHTML = "SARAH TE AMO!!!"
			window.scrollTo(0, 0);
			document.querySelector('#winScreen').classList.toggle('active');
			sequenciaDeCaracteres = [];
		}

		console.log(sequenciaDeCaracteres);
		temporizador = setTimeout(function () {
			sequenciaDeCaracteres = [];
		}, 1000);
	});
}
initKonamiCode1();

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