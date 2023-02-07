export function deteconexion() {
	// console.log("Vamos Bien");
	// console.log(navigator);
	const conex = document.querySelector(".conex");
	const texto = document.createElement("span");
	const body = document.querySelector("body");
	const divinter = document.createElement("div");

	carga();
	// EVENTO

	window.addEventListener("online", () => {
		carga();
		divinter.classList.remove("inter2");
		divinter.classList.add("inter");
		divinter.textContent = `Conectado a la red ${navigator.connection.effectiveType}`;
		conex.appendChild(divinter);
		seta();
	});
	window.addEventListener("offline", () => {
		carga();
		divinter.classList.remove("inter");
		divinter.classList.add("inter2");
		divinter.textContent = "Sin Conexión a Internet";
		conex.appendChild(divinter);
		seta();
	});

	function carga() {
		if (navigator.onLine) {
			texto.textContent = `Conectado a la red ${navigator.connection.effectiveType}`;
			texto.classList = "redd";
			texto.style.backgroundColor = "lime";
			conex.appendChild(texto);
		} else {
			texto.textContent = "En este momento no cuenta con conexión a internet";
			texto.classList = "redd";
			texto.style.backgroundColor = "red";
			conex.appendChild(texto);
		}
	}

	function seta() {
		setTimeout(() => {
			divinter.innerHTML = "";
		}, 3000);
	}
}
