class UI {
  constructor(){
    this.cityName = document.querySelector('.city-name p');
    this.cardBody = document.querySelector('.card-body');
    this.citySpan = document.querySelector('.city-name span');
  }

  paint(city){
    this.cityName.textContent = `${city.name}, ${city.sys.country}`;
    this.cardBody.innerHTML = `
    <div class="card-mid row">
      <div class="col-8 text-center temp">
        <span>${Math.round(city.main.temp)}&deg;C</span>
      </div>
      <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0].description}</p>
        <p class="max">${Math.round(city.main.temp_max)}&deg;C</p>
        <p class="min">${Math.round(city.main.temp_min)}&deg;C</p>
      </div>
    </div>
    <div class="icon-container card shadow mx-auto">
      <img id="img" src="http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="" />
    </div>
    <div class="card-bottom px-5 py-4 row">
      <div class="col text-center">
        <p>${Math.round(city.main.feels_like)}&deg;C</p>
        <span>Feels like</span>
      </div>
      <div class="col text-center">
        <p>${Math.round(city.main.humidity)}%</p>
        <span>Humidity</span>
      </div>
    </div>
    `;

    // day and night img
    if(isDayTime(city.weather[0].icon)){
      // day
      timeImage.setAttribute('src', './img/day.jpg');
      if(this.cityName.classList.contains('text-white')){
        this.cityName.classList.remove('text-white');
        this.cityName.classList.add('text-dark');
      } 
      else {
        this.cityName.classList.add('text-dark');
      }
    } else {
      // night
      timeImage.setAttribute('src', '/img/night.jpg');
      if(this.cityName.classList.contains('text-dark')){
        this.cityName.classList.remove('text-dark');
        this.cityName.classList.add('text-white');
      } 
      else {
        this.cityName.classList.add('text-white');
      }
    }

    if(isDayTime(city.weather[0].icon)){
      // day
      timeImage.setAttribute('src', './img/day.jpg');
      if(this.citySpan.classList.contains('text-white')){
        this.citySpan.classList.remove('text-white');
        this.citySpan.classList.add('text-dark');
      } 
      else {
        this.citySpan.classList.add('text-dark');
      }
    } else {
      // night
      timeImage.setAttribute('src', '/img/night.jpg');
      if(this.citySpan.classList.contains('text-dark')){
        this.citySpan.classList.remove('text-dark');
        this.citySpan.classList.add('text-white');
      } 
      else {
        this.citySpan.classList.add('text-white');
      }
    }
  }
  

  // show alert message
  showAlert(message, className){
    // clear any remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add class
    div.className = className;
    // add textnode and append to div
    div.appendChild(document.createTextNode(message));
    // get parent 
    const container = document.querySelector('.container');
    // get card
    const card = document.querySelector('.card');
    // Insert alert
    container.insertBefore(div, card);

    // timeout after 3sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }
}

