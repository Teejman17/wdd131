function caluclateWindChill(temperature, windSpeed)
{
    if (temperature <= 50 && windSpeed > 3)
    {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill);
    }
    else {
        return "N/A"; 
    }
}

const windChillElement = document.getElementById('windchill-value');
const staticTemperatureFahrenheit = 89;
const staticWindSpeed = 7;

const windChillFactor = caluclateWindChill(staticTemperatureFahrenheit, staticWindSpeed);

    if (windChillFactor !== "N/A")
    {
        windChillElement.textContent = windChillFactor + "°F";
    }
    else {
        windChillElement.textContent = "N/A";
}
    
const currentYear = New Date().getFullYear();
if (coprightYearElement) {
    copyrightYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString('en-US', {
        month: '2-digit', day: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
}