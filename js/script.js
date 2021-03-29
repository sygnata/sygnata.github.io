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
const text = document.querySelector('.nome');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const letters = document.querySelectorAll('span');
for (let i = 0; i < letters.length; i++) {
	letters[i].addEventListener('mouseover', function () {
		letters[i].classList.add('active');
	})
}

/*Scoll Suave*/
$('.nav a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 100
	}, 500);
});