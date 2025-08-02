document.addEventListener("DOMContentLoaded", () => {
	const hamButton = document.querySelector('#menu');
	const navigation = document.querySelector('.navigation');
	const navLinks = document.querySelectorAll('.navigation a');

	hamButton.addEventListener('click', () => {
		navigation.classList.toggle('open');
		hamButton.classList.toggle('open');
	});


	const temples = [
		{
			templeName: "Aba Nigeria",
			location: "Aba, Nigeria",
			dedicated: "2005, August, 7",
			area: 11500,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
		},
		{
			templeName: "Manti Utah",
			location: "Manti, Utah, United States",
			dedicated: "1888, May, 21",
			area: 74792,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
		},
		{
			templeName: "Payson Utah",
			location: "Payson, Utah, United States",
			dedicated: "2015, June, 7",
			area: 96630,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
		},
		{
			templeName: "Yigo Guam",
			location: "Yigo, Guam",
			dedicated: "2020, May, 2",
			area: 6861,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
		},
		{
			templeName: "Washington D.C.",
			location: "Kensington, Maryland, United States",
			dedicated: "1974, November, 19",
			area: 156558,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
		},
		{
			templeName: "Lima Perú",
			location: "Lima, Perú",
			dedicated: "1986, January, 10",
			area: 9600,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
		},
		{
			templeName: "Mexico City Mexico",
			location: "Mexico City, Mexico",
			dedicated: "1983, December, 2",
			area: 116642,
			imageUrl:
				"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
		},
		{
			templeName: "Manhattan New York",
			location: "New York, New York, Unites States",
			dedicated: "2004, June, 13",
			area: 20630,
			imageUrl:
				"https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-15643.jpg"
		},
		{
			templeName: "Auckland New Zealand",
			location: "Auckland, New Zealand",
			dedicated: "2025, April, 13",
			area: 45456,
			imageUrl:
				"https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57800.jpg"
		},
		{
			templeName: "Tokyo Japan",
			location: "Tokyo, Japan",
			dedicated: "2022, July, 3",
			area: 53997,
			imageUrl:
				"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
		}

	];

	// createTempleCard();

	function createTempleCard(filteredTemples) {
		const templesContainer = document.querySelector('.temples-container');
		templesContainer.innerHTML = '';

		filteredTemples.forEach(temple => {
			let card = document.createElement("section");
			card.classList.add("temples-card");

			let name = document.createElement("h3");
			let location = document.createElement("p");
			let dedication = document.createElement("p");
			let area = document.createElement("p");
			let img = document.createElement("img");

			name.textContent = temple.templeName;
			location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
			dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
			area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
			img.setAttribute("src", temple.imageUrl);
			img.setAttribute("alt", `${temple.templeName} Temple`);
			img.setAttribute("loading", "lazy");

			card.appendChild(name);
			card.appendChild(location);
			card.appendChild(dedication);
			card.appendChild(area);
			card.appendChild(img);

			templesContainer.appendChild(card);
		});

	}
	createTempleCard(temples);


	const filteredOldTemples = () => {
		const filteredTemples = temples.filter(
			(temple) => new Date(temple.dedicated).getFullYear() < 1900
		);
		// displayTemples(filteredTemples);
		createTempleCard(filteredTemples);
	};

	const filteredNewTemples = () => {
		const filteredTemples = temples.filter(
			(temple) => new Date(temple.dedicated).getFullYear() > 2000
		);
		// displayTemples(filteredTemples);
		createTempleCard(filteredTemples);
	};

	const filteredLargeTemples = () => {
		const filteredTemples = temples.filter(
			(temple) => temple.area > 90000
		);
		// displayTemples(filteredTemples);
		createTempleCard(filteredTemples);
	};

	const filteredSmallTemples = () => {
		const filteredTemples = temples.filter(
			(temple) => temple.area < 10000
		);
		// displayTemples(filteredTemples);
		createTempleCard(filteredTemples);
	};

	document.querySelector("nav").addEventListener("click", (event) => {
		event.preventDefault();

		if (event.target.tagName === "A") {
			navLinks.forEach(navLink => navLink.classList.remove("active"));
			event.target.classList.add("active");

			const filter = event.target.id;
		

			switch (filter) {
				case "old":
					filteredOldTemples();
					break;
				case "new":
					filteredNewTemples();
					break;
				case "large":
					filteredLargeTemples();
					break;
				case "small":
					filteredSmallTemples();
					break;
				case "home":
				default:
					createTempleCard(temples);
					break;
			}
		}
	});

	const currentYear = new Date().getFullYear();
	const copyrightYearElement = document.getElementById('copyrightYear');
	if (copyrightYearElement) {
		copyrightYearElement.textContent = currentYear;
	}
	const lastModifiedElement = document.getElementById('lastModified');
	if (lastModifiedElement) {
		lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString('en-US', {
			month: '2-digit', day: '2-digit', year: 'numeric',
			hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
		});
	}
});