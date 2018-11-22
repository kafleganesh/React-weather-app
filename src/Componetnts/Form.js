import React, { Component } from 'react';

const Form = props => (
    <div>
            <form onSubmit = {props.getWeather}>
                <label>city</label>
                <input type = "text" name = "city" placeholder = "cityName"/>
                <label>Country</label>
                <input type = "text" name = "country" placeholder = "CountryName"/>
                <button>Get Weather</button>
            </form>
    </div>
);
export default Form;