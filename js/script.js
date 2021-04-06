import scrollRevealTitle from './modules/scrollRevealTitle.js';
import initSmokeEffect from './modules/initSmokeEffect.js';
import initScrollSuave from './modules/initScrollSuave.js';
import initiBackToTop from './modules/initiBackToTop.js';

scrollRevealTitle();
initSmokeEffect();
initScrollSuave();
initiBackToTop();

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


/*ANIMA SCROLL*/
function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll');
	if (sections.length) {
		const windowMetade = window.innerHeight * 0.6;

		function animaScroll() {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;
				const isSectionVisible = (sectionTop - windowMetade) < 0;
				if (isSectionVisible)
					section.classList.add('ativo');
				else
					section.classList.remove('ativo');
			})
		}

		animaScroll();

		window.addEventListener('scroll', animaScroll);
	}
}
initAnimacaoScroll();

function initAnimacaoScroll1() {
	const sections = document.querySelectorAll('.js-scroll-icone');
	if (sections.length) {
		const windowMetade = window.innerHeight * 0.6;

		function animaScroll() {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;
				const isSectionVisible = (sectionTop - windowMetade) < 0;
				if (isSectionVisible)
					section.classList.add('ativoIcone');
				else
					section.classList.remove('ativoIcone');
			})
		}

		animaScroll();

		window.addEventListener('scroll', animaScroll);
	}
}
initAnimacaoScroll1();