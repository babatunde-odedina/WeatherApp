class Weather {
  constructor(city){
    this.apiKey = '9f0c02eaab10a7ad92183b30db8ba2ca';
    this.city = city;
  }

  // fetch weather from API
  async getWeather(){
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const Data = await response.json();

    return Data;
  } 

}