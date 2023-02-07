export function teclado(params) {
	const teclad = document.querySelector(".teclad");
	const circle = document.querySelector(".circle");

	let x = 0;
	let y = 0;

	document.addEventListener("keydown", (e) => {
		// console.log(e.code);
		// console.log(e);
		let data = teclad.getBoundingClientRect();
		let bola = circle.getBoundingClientRect();
		switch (e.code) {
			case "ArrowUp":
				if (data.top < bola.top) {
					y--;
					e.preventDefault();
				}
				break;

			case "ArrowDown":
				if (data.bottom > bola.bottom) {
					y++;
					e.preventDefault();
				}

				break;

			case "ArrowRight":
				if (data.right > bola.right) {
					x++;
					e.preventDefault();
				}

				break;

			case "ArrowLeft":
				if (data.left < bola.left) {
					x--;
					e.preventDefault();
				}

				break;

			default:
				break;
		}
		// console.log(y);
		// console.log(x);
		circle.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
	});
}

// ArrowUp
// ArrowDown
// ArrowRigh
// ArrowLeft
