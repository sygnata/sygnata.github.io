// Scroll Reveal
ScrollReveal({
	duration: 1000
})

ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.tagline', {
	delay: 500

})
ScrollReveal().reveal('.punchline', {
	delay: 2000
})


/*SMOKE EFFECT*/
function initSmokeEffect() {
	const text = document.querySelector('.nome');
	text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

	const letters = document.querySelectorAll('span');
	for (let i = 0; i < letters.length; i++) {
		letters[i].addEventListener('mouseover', function () {
			letters[i].classList.add('active');
		})
	}
}
initSmokeEffect();

function initScrollSuave() {
	const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section = document.querySelector(href);

		section.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}

	linksInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	});
}
initScrollSuave();

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