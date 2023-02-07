export function userAgent(params) {
	const usera = document.querySelector(".usera");
	const listica = document.querySelector(".listica");
	// console.log(navigator.userAgent);
	// usera.textContent = navigator.userAgent;
	let li = document.createElement("li");
	li.textContent = navigator.userAgent;
	listica.appendChild(li);

	const isMobile = {
		android: () => navigator.userAgent.match(/android/i),
		ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
		windows: () => navigator.userAgent.match(/windows phone/i),
		any: function () {
			return this.android() || this.ios() || this.windows();
		},
	};

	const isDesktop = {
		linux: () => navigator.userAgent.match(/linux/i),
		mac: () => navigator.userAgent.match(/mac os/i),
		windows: () => navigator.userAgent.match(/windows NT/i),
		any: function () {
			return this.linux() || this.mac() || this.windows();
		},
	};

	const isBrowser = {
		chrome: () => navigator.userAgent.match(/chrome/i),
		safari: () => navigator.userAgent.match(/safari/i),
		firefox: () => navigator.userAgent.match(/firefox/i),
		opera: () => navigator.userAgent.match(/opera|opera mini/i),
		ie: () => navigator.userAgent.match(/msie|iemobile/i),
		edge: () => navigator.userAgent.match(/edg/i),
		any: function () {
			return (
				this.edge() ||
				this.chrome() ||
				this.safari() ||
				this.firefox() ||
				this.opera() ||
				this.ie()
			);
		},
	};

	let li2 = document.createElement("li");
	li2.textContent = `Plataforma:${isMobile.any() || isDesktop.any()}`;
	listica.appendChild(li2);

	let li3 = document.createElement("li");
	li3.textContent = `Navegador:${isBrowser.any()}`;
	listica.appendChild(li3);

	if (isDesktop.windows()) {
		let p = document.createElement("p");
		p.classList.add("solo");
		p.textContent =
			"Este contenido solo es visible para Sistema Operativo WINDOWS";
		usera.appendChild(p);
	}

	if (isBrowser.edge()) {
		let p1 = document.createElement("p");
		p1.classList.add("solo");
		p1.textContent = "Este contenido solo se ve en Navegador EDGE";
		usera.appendChild(p1);
	}

	if (isMobile.ios()) {
		window.location.href = "https://www.eltiempo.com/";
	}
}
