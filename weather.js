
//create class constructor
class Weather {
  constructor(city){
    this.apiKey = '9f7fc7692c8a5949774d8258dcde9f44';
    this.city = city;
  }

  // Fetch weather from API
   async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&id=524901&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city){
    this.city = city;
  }
}
