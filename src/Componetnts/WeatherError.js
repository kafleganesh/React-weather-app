import React, { Component } from 'react';

const WeatherError = (props) => (
    <div className = "weather-info">
        {props.errorCode && <p> {props.error}</p>}
</div>
); 
export default WeatherError;