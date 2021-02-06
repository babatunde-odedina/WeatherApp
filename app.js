// search input
const getCity = document.querySelector('.search-city');
// get time image
const timeImage = document.querySelector('.card-img-top');
// display card content
const cardContent = document.querySelector('.bg-card');

// Event Listeners

// create Search input event listener
getCity.addEventListener('submit', (e) => {
  const citySearched = document.getElementById('city-searched').value.trim();
  getCity.reset();
  
  // init weather class
  const weather = new Weather(citySearched);

  // init UI class
  const ui = new UI;

  // get weather promise
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
      cardContent.classList.remove('d-none');
    })
    .catch((error) => {
      ui.showAlert('city not found', 'alert alert-danger');
    });

  e.preventDefault();
})

// check for day or night
const isDayTime = (icon) => {
  if (icon.includes('d')){
    return true;
  } else {
    return false;
  }
}






