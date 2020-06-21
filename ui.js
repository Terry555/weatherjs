
class UI {
  constructor(){
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.visibility = document.getElementById('w-visibility')
    this.wind = document.getElementById('w-wind')
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent= weather.main.temp;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.visibility.textContent = `Visibility: ${weather.visibility}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}
