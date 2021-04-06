// Scroll Reveal
export default function scrollRevealTitle() {
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
}