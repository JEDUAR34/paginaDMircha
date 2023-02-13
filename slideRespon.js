export function slider() {
	const imk = document.querySelector(".imk");
	let num = 0;
	document.addEventListener("click", (e) => {
		// console.log("click");
		const dibu = [
			"https://placeimg.com/400/400/arch",
			"https://placeimg.com/400/400/people",
			"https://placeimg.com/400/400/tech",
		];

		// console.log(num);
		if (e.target.matches(".imk1")) {
			// console.log("Flecha 1");
			num++;
			if (num > 2) {
				num = 0;
			}
			// console.log(num);
			imk.setAttribute("src", `${dibu[num]}`);
			imk.classList.add("despaci");
		}
		if (e.target.matches(".imk2")) {
			num--;
			if (num < 0) {
				num = 2;
			}
			// console.log(num);
			imk.setAttribute("src", `${dibu[num]}`);
		}
	});
}
