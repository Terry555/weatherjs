
// Init Storage
const storage = new Storage();
// Init UI
const ui = new UI();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  // Set location in local storage
  storage.setLocationData(city);

  // Get and display Weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather()
      .then(results =>
        // console.log(results))
        ui.paint(results))
      .catch(err => console.log(err));
}
