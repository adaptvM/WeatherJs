//ini storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init UI
const ui = new UI();

//On Start up - Get weather
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //Change location
  weather.changeLocation(city,state);

  //Set location in LS
  storage.setLocationData(city, state);

  //Get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');

});


function getWeather(){
weather.getWeather()
  .then(result => {
    ui.paint(result)
  })
  .catch(err => console.log(err));
}