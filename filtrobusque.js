export function filtro() {
	document.addEventListener("input", (e) => {
		const busq = document.querySelector(".busq");
		const form = new FormData(busq);
		const [dato] = [...form.values()];
		// console.log(document.querySelectorAll(".car"));
		document.querySelectorAll(".car").forEach((item) => {
			if (item.querySelector("p").textContent.includes(dato.toLowerCase())) {
				item.classList.remove("filter");
			} else {
				// console.log("mal");
				item.classList.add("filter");
			}
		});
	});
}
