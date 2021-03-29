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