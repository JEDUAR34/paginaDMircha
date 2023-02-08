export function sorteo() {
	document.addEventListener("click", (e) => {
		if (e.target.matches(".sor")) {
			// const ar = [
			// 	"JAVASCRIPT",
			// 	"PHP",
			// 	"JAVA",
			// 	"C",
			// 	"Python",
			// 	"Ruby",
			// 	"Go",
			// 	"VisuaL Basic",
			// 	"Rust",
			// 	"Perl",
			// ];

			const li = document.querySelectorAll(".lengu li");
			const lengu = document.querySelector(".lengu");
			const pru = document.querySelector(".pru");
			pru.innerHTML = " ";

			const dat = rand(0, 10);
			function rand(min, max) {
				return Math.random() * (max - min) + min;
			}

			const div = document.createElement("div");
			div.classList.add("in");
			div.insertAdjacentText(
				"beforeend",
				`El lenguaje de programación ganador es: ${
					li[Math.trunc(dat)].textContent
				} `
			);
			pru.insertAdjacentElement("beforeend", div);

			// alert(
			// 	`El lenguaje de programación ganador es: ${
			// 		li[Math.trunc(dat)].textContent
			// 	} `
			// );
		}
	});
}
