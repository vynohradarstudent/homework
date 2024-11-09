const apiKey = '9afa599e312051b0ab45fcd866141e75'; // Вставте ваш API-ключ сюди

$(document).ready(function() {
    fetchCurrentWeather("Kyiv"); // Запит поточної погоди для Києва при завантаженні сторінки
});

function fetchCurrentWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP помилка: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayCurrentWeather(data))
        .catch(error => {
            console.error('Помилка:', error);
            $('#weather-info').html('<p>Не вдалося отримати дані про погоду. Перевірте API-ключ та URL.</p>');
        });
}

function displayCurrentWeather(data) {
    if (data && data.current) {
        const tempC = data.current.temp_c;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;
        const html = `
            <h2>Температура: ${tempC}°C</h2>
            <p>Стан: ${condition}</p>
            <img src="https:${icon}" alt="${condition}" />
        `;
        
        $('#weather-info').html(html);
    } else {
        $('#weather-info').html('<p>Не вдалося отримати дані про погоду.</p>');
    }
}
