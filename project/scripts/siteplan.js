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
    })
};