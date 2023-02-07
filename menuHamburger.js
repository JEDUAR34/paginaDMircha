export function hambu(params) {
	const boton = document.querySelector(".boto");
	const esco = document.querySelector(".esco");

	document.addEventListener("click", (e) => {
		if (e.target.matches(".boto")) {
			esco.classList.toggle("baja");
			boton.classList.toggle("is-active");
		}
		if (e.target.matches(".esco a")) {
			esco.classList.remove("baja");
			boton.classList.toggle("is-active");
		}
	});
}
