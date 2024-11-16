fetch(`https://api.openweathermap.org/data/2.5/weather?lat=50.4501&lon=30.5234&units=metric&appid=9afa599e312051b0ab45fcd866141e75`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = '';

  
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const weatherDescription = data.weather[0].description;

    const currentWeather = `
      <h3>Поточна погода у Києві</h3>
      <p>Температура: ${temperature}°C</p>
      <p>Відчувається як: ${feelsLike}°C</p>
      <p>Опис: ${weatherDescription}</p>
    `;

    weatherDiv.innerHTML = currentWeather;
  })
  .catch(error => console.error('Помилка:', error));