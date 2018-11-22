import React, { Component } from 'react';
import './App.css';
import Title from './Componetnts/Title';
import Form from './Componetnts/Form';
import Weather from './Componetnts/Weather';

const API_KEY = "78ff83897f808bf2493e333592b4bb8d";

class App extends Component {
  state = {
              temperature : undefined,
              city : undefined,
              country : undefined,
              humidity : undefined,
              description : undefined,
              error : undefined
          }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},%20${country}%20&appid=${API_KEY}&units=metrics`);
    const data = await api_call.json();
    
    console.log(data);
    if (city && country){
        this.setState({
            temperature : data.main.temp,
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
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <Form  getWeather = {this.getWeather}/>
        <Weather 
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            error = {this.state.error}
            description = {this.state.description} 
        />
      </div>
    );
  }
}
export default App;
