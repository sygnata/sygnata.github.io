export default function initScrollSuave() {
	const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section = document.querySelector(href);


		// forma alternativa
		const topo = section.offsetTop;
		window.scrollTo({
			top: topo,
			behavior: 'smooth',
		});

		//nao tem suporte em todos os browsers
		// section.scrollIntoView({
		// 	behavior: "smooth",
		// 	block: "start"
		// })
	}

	linksInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	});
}