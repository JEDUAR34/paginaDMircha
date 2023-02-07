export function responsiva() {
	const sec4 = document.querySelector(".sec4");
	let data = window.matchMedia(`(min-width:1024px)`);

	document.addEventListener("DOMContentLoaded", (e) => {
		ancho(e);
	});

	window.addEventListener("resize", (e) => {
		ancho(e);
	});

	function ancho(e) {
		// console.log(data.matches);
		if (data.matches) {
			sec4.innerHTML = `<h3 data-dark>Responsive con JavaScript</h3>
			<div class="mapa uno">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15810.306401124617!2d-72.4849859!3d7.834554949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1672334040628!5m2!1ses!2sco"
					width="600"
					height="180"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div class="video uno">
			<iframe width="560" height="200" src="https://www.youtube.com/embed/wAis4BSEGpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>`;
		} else {
			sec4.innerHTML = `<h3 data-dark>Responsive con JavaScript</h3>
			
				<p>
					<a
						href="https://www.google.com/maps/@7.8370633,-72.4943844,15z?hl=es"
						target="_blank"
						>IR A MAPA</a
					>
				</p>
				<p>
					<a
						href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA"
						target="_blank"
						>IR A VIDEO</a
					>
				</p>
			`;
		}
	}
}
