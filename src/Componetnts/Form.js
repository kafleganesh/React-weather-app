import React, { Component } from 'react';

const Form = props => (
    <div>
            <form onSubmit = {props.getWeather}>
                <label>City</label>
                <input type = "text" name = "city" placeholder = "cityName"/>
                <label>Country</label>
                <input type = "text" name = "country" placeholder = "CountryName"/>
                <button className = "btn btn-primary btn-sm">Get Weather</button>
            </form>
    </div>
);
export default Form;