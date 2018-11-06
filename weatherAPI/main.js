let api = 'http://api.openweathermap.org/data/2.5/weather?q=';
let key = '&APPID=b3fef6fbe2e0df61b9026e324a83f109';
let city = 'Miami';
let units ='&units=imperial'
let url = api + city + key + units;



fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Miami</h2>';
       //console.log(data);
       // let weather = data.weather.description;
       let temp = data.main.temp;
       let humidity = data.main.humidity;
       let iconCode = data.weather[0].icon;
       let iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
        data.weather.forEach(function(weather){
          output += `
          <ul>
            <li>Forecast: ${weather.main}</li>
            <li>Humidity: ${humidity}</li>
            <li>Temperature: ${temp}</li>
          </ul>
          `; 
     })
     document.getElementById('output').innerHTML = output;
     document.getElementById('wicon').src = iconUrl;
    });
    