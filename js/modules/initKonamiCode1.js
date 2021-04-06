export default function initKonamiCode1() {
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