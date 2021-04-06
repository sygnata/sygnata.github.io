export default function initKonamiCode2() {
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