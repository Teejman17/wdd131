document.addEventListener("DOMContentLoaded", () => {
	const hamButton = document.querySelector('#menu');
	const navigation = document.querySelector('.navigation');

	hamButton.addEventListener('click', () => {
		navigation.classList.toggle('open');
		hamButton.classList.toggle('open');
	});
});

const currentDate = new Date.getFullYear();
document.getElementById('copyrightYear').textContent = currentYear;
const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = Date;