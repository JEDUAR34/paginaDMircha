export function prueba(e) {
	const formulario = document.querySelector(".formulario");
	const titu = document.querySelector(".prue");

	let pag;
	document.addEventListener("submit", (e) => {
		e.preventDefault();
		const datos = new FormData(formulario);
		const [ur, ancho, alto] = [...datos.values()];
		console.log(ur, ancho, alto);
		// titu.dataset.casita = "casita";
		if (e.target === formulario) {
			// console.log("casita");
			pag = window.open(ur, "pag", `innerWidth=${ancho},innerHeight=${alto}`);
			// pag.outerWidth = ancho;
			// pag.outerHeight = alto;
		}
		if (e.target.dataset.bo == "bt4") {
			pag.close();
		}
	});

	// RECORDANDO EVENTO CON DATASET

	// document.addEventListener("click", (e) => {
	// 	console.clear();
	// 	console.log(e);
	// 	if (e.target.dataset.casita) {
	// 		alert("muy bien");
	// 	}
	// });
}
