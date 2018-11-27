import React, { Component } from 'react';

const Weather = (props) => (
    <div className = "weather-info">
        {props.temperature && <p> Temperature  = {props.temperature}</p>}
        {props.country && <p> Country  = {props.country}</p>}
        {props.city &&  <p> City  = {props.city}</p>}
        {props.humidity && <p> Humidity  = {props.humidity}</p>}
        {props.description && <p>Description = {props.description}</p>}
        {props.error && <p> {props.error}</p>}
</div>
); 
export default Weather;