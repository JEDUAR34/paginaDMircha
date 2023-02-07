export function boton(params) {
	const but = document.querySelector(".but");
	document.addEventListener("click", (e) => {
		if (e.target.matches(".but") || e.target.matches(".flecha")) {
			console.log("bien");
		}
	});

	document.addEventListener("scroll", (e) => {
		// console.log(window.scrollY);
		if (window.scrollY >= 162.5) {
			but.classList.remove("desapa");
		} else {
			but.classList.add("desapa");
		}
	});
}
