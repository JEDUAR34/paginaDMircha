export function reloj(params) {
	const template = document.querySelector(".template");
	const clone = template.content.cloneNode(true);
	const data = document.querySelector(".data");
	const audio = document.createElement("audio");
	let info;
	let f;
	document.addEventListener("click", (e) => {
		if (e.target.matches(".relo")) {
			let hora = new Date().toLocaleTimeString();
			clone.textContent = hora;
			data.appendChild(clone);
			info = setInterval(() => {
				data.textContent = " ";
				hora = new Date().toLocaleTimeString();
				clone.textContent = hora;
				data.appendChild(clone);
			}, 999);
			f = e.target;
			e.target.setAttribute("disabled", true);
		}

		if (e.target.matches(".detereloj")) {
			data.textContent = " ";
			document.querySelector(".relo").disabled = false;
			clearInterval(info);
		}

		if (e.target.matches(".alarm")) {
			// data.appendChild(audio);
			data.insertAdjacentElement("afterend", audio);
			audio.setAttribute(
				"src",
				"/JAVASCRIPT/EJERCICIOS/EJERCICIOS DOM MIRCHA/La Envidia  Diomedes Díaz.mp3"
			);
			audio.setAttribute("autoplay", true);
			e.target.setAttribute("disabled", true);
		}
		if (e.target.matches(".detealarm")) {
			audio.setAttribute("src", "");
			document.querySelector(".alarm").disabled = false;
		}
	});
}
