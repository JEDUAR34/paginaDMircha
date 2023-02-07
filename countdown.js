export function fecha(params) {
	const fecha = document.querySelector(".fecha");

	const interval = setInterval(() => {
		const fecha2 = new Date("Nov 26, 2023 18:56:00").getTime();
		const fechas = new Date().getTime();
		const resul = fecha2 - fechas;
		let dia = resul / 86400000;
		let hora =
			(Math.abs(Math.floor(dia) - dia) * 24 * 60 * 60 * 1000) / 3600000;
		let min = (Math.abs(Math.floor(hora) - hora) * 60 * 60 * 1000) / 60000;
		let sec = (Math.abs(Math.floor(min) - min) * 60 * 1000) / 1000;
		let data = `${Math.trunc(dia)} dias ${Math.trunc(hora)} horas ${Math.trunc(
			min
		)} minutos ${Math.trunc(sec)} segundos`;
		fecha.textContent = data;
		if (resul <= 0) {
			// console.log("Tiempo Cumplido");
			fecha.textContent = `0 dias 0 horas 0 minutos 0 segundos`;
			terminar();
		}
	}, 1000);
	const terminar = () => {
		clearInterval(interval);
	};
}
