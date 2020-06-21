
//create class constructor
class Weather {
  constructor(city){
    this.apiKey = '9f7fc7692c8a5949774d8258dcde9f44';
    this.city = city;
  }

  // Fetch weather from API
   async getWeather(){
    // const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.apiKey}`);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=boston&id=524901&APPID=${this.apiKey}`);


    const responseData = await response.json();

    return response;
  }

  // Change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}
