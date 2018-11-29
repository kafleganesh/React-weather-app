import React, { Component } from 'react';
import './App.css';
import './Mycss.css';
import Title from './Componetnts/Title';
import Form from './Componetnts/Form';
import Weather from './Componetnts/Weather';
import WeatherError from './Componetnts/WeatherError';

const API_KEY = "78ff83897f808bf2493e333592b4bb8d";

class App extends Component {
  state = {
              temperature : undefined,
              city : undefined,
              country : undefined,
              humidity : undefined,
              description : undefined,
              error : undefined,
              errorCode: 200

          }

  getWeather = async (e) => {
    try {
 
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const reqURL=`https://api.openweathermap.org/data/2.5/weather?q=${city},%20${country}%20&appid=${API_KEY}&units=metrics`;
    const api_call = await fetch(reqURL);

    //Parsing
    const data = await api_call.json();
    this.setState ({
      errorCode: data.cod,
      error:data.message
     });
     
    if (city && country){
        this.setState({
            temperature : data.main.temp===""?"error":data.main.temp,
            city : data.name,
            country : data.sys.country,
            humidity : data.main.humidity,
            description : data.weather[0].description,
            error : ""
  
        });
    }else{
      this.setState({
            temperature : undefined,
            city : undefined,
            country : undefined,
            humidity : undefined,
            description : undefined,
            error : "please enter the name of city and country"
      
      });
    }

    
  } catch(e) {
    console.log('wather_response error: ', e.cod);  
}
  }
  render() {
    return (
      <div className="App">
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-5  title-container">
            <Title/>
            </div>
            <div className = "col-sm-7 weather-container">
            <Form  getWeather = {this.getWeather}/>
        <Weather 
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            error = {this.state.error}
            description = {this.state.description} 
        />
        {/* error */}
        <WeatherError 
               error = {this.state.errorCode}
         />
            </div>
          </div>       
        </div>     
      </div>
    );
  }
}
export default App;
