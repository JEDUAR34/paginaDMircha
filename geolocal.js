export function geolocal() {
	const ubica = document.querySelector(".ubica");
	const plat = document.createElement("p");
	const plon = document.createElement("p");
	const paccu = document.createElement("p");
	const a = document.createElement("a");

	const suces = (position) => {
		// console.log(position);
		const distan = position.coords.accuracy.toFixed(2);
		plat.insertAdjacentText(
			"afterbegin",
			`Longitud: ${position.coords.latitude}`
		);
		plon.insertAdjacentText(
			"afterbegin",
			`Latitud: ${position.coords.longitude}`
		);
		paccu.insertAdjacentText(
			"afterbegin",
			`Exactitud de la distancia: aproximadamente ${distan} metros`
		);

		a.textContent = "VER EL MAPA";
		a.target = "blank";
		a.rel = "noopener";
		a.href = `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z`;
		ubica.insertAdjacentElement("afterbegin", plat);
		ubica.insertAdjacentElement("beforeend", plon);
		ubica.insertAdjacentElement("beforeend", paccu);
		ubica.insertAdjacentElement("beforeend", a);
	};

	const error = (e) => {
		plat.textContent = "El usuario no aceptó los permisos de ubicación.";
		ubica.insertAdjacentElement("afterbegin", plat);
		// console.log(e);
	};

	const opcion = {
		enableHighAccuracy: true,
		timeout: 2000,
		maximumAge: 0,
	};

	navigator.geolocation.getCurrentPosition(suces, error, opcion);
}
