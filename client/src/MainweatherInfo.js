import Header from './components/Header/Header';
// import Page from "./components/Page/Page";
import Weather from './components/Weather';
import 'weather-icons/css/weather-icons.css'
import React from 'react';
import SearchForm from './components/Form/Form';

const ApiKey = `4579d108f914b034c6d19caeaf21307f`;

class MainWeatherInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      humidity: undefined,
      description: "",
      windSpeed: undefined,
      error: false
    };

    // this.weatherInfo();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  };


  get_weather_icons(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 632:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default: this.setState({ icon: this.weatherIcon.Clouds });
    };
  };



  weatherInfo = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if (city) {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`);

      const response = await api_call.json()
      console.log(response);

      this.setState({
        city: response.name,
        windSpeed: response.wind.speed,
        humidity: response.main.humidity,
        celsius: response.main.temp,
        description: response.weather[0].description,
        // icon :this.weatherIcon.Thunderstorm
      });
      this.get_weather_icons(this.weatherIcon, response.weather[0].id)
    }
    else {
      this.setState({ error: true });
    };
  };

  state = {};
  render() {
    return (
      <div>
        <Header />
        <SearchForm loadWeather={this.weatherInfo} error={this.state.error} />
        <Weather city={this.state.city}
          temp_celsius={this.state.celsius}
          description={this.state.description}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  };
};

export default MainWeatherInfo;
