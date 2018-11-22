import React, { Component } from 'react';

const Weather = (props) => (
    <div>
        {props.temperature && <p> temperature  = {props.temperature}</p>}
        {props.country && <p> country  = {props.country}</p>}
        {props.city &&  <p> city  = {props.city}</p>}
        {props.humidity && <p> hunidity  = {props.humidity}</p>}
        {props.description && <p>description = {props.description}</p>}
        {props.error && <p> {props.error}</p>}
</div>
); 
export default Weather;