$(document).ready(function () {
    async function getWeatherByCoordinates(lat, lon){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            
            if (!response.ok) {
                throw new Error('Weather fetch error');
            }
    
            const data = await response.json();
            return `${data.main.temp}°C`
        } catch (error) {
            console.error('Error:', error);
        }    
    }
});