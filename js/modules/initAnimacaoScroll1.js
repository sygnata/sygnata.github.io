export default function initAnimacaoScroll1() {
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