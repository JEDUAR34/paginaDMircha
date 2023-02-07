export function noche(params) {
	const body = document.querySelector("body");
	const noche = document.querySelector(".noche");
	const tecl = document.querySelector(".teclad");
	const data = document.querySelectorAll("[data-dark]");

	document.addEventListener("DOMContentLoaded", (e) => {
		if (localStorage.getItem("datas")) {
			let x = localStorage.getItem("datas");
			if (x == 1) {
				console.log("bien");
				console.log(x);
				x = 0;
				modo(x);
			}
		}

		document.addEventListener("click", (e) => {
			let x = 1;
			if (e.target.matches(".noche")) {
				if (localStorage.getItem("datas")) {
					x = localStorage.getItem("datas");
					modo(x);
				} else {
					modo(0);
				}
			}
		});
		function modo(x) {
			if (x == 0) {
				body.style.backgroundColor = "#222";
				tecl.style.border = "5px solid red";
				noche.textContent = " ";
				noche.textContent = "☀";
				data.forEach((item) => {
					item.style.color = "#555";
				});
				// console.log(data);
				// localStorage.removeItem("datas");
				localStorage.setItem("datas", "1");
				// x = 1;
			} else if (x == 1) {
				body.style.backgroundColor = "white";
				tecl.style.border = "";
				noche.textContent = " ";
				noche.textContent = "🌙";
				// localStorage.removeItem("datas");
				localStorage.setItem("datas", "0");

				// x = 0;
			}
		}
	});
}
