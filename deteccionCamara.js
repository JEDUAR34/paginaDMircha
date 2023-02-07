export function deteccionCamara() {
	const vide = document.querySelector(".vide");
	navigator.mediaDevices
		.getUserMedia({ video: true })
		.then((stream) => {
			console.log(stream);
			// navigator.mediaDevices.getUserMedia({ video: true });
			vide.srcObject = stream;
			vide.play();

			// vide.srcObject = cam;
		})
		.catch((err) => {
			const stex = document.createElement("p");
			vide.insertAdjacentElement("beforebegin", stex);
			stex.classList.add("bs");
			stex.insertAdjacentText(
				"afterbegin",
				`Se presentó el siguiente error: ${err}`
			);
		});
}
