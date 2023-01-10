import React from 'react';
import './weather.css'; 

const Weather = (props) => {
    return (
        <div className='container'>
            <div className='card'>

                <h5 className='py-4 '>
                    <i className={`wi ${props.weatherIcon} display-1 align-items-center`}></i>
                </h5>

                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}°</h1>) :
                <h4>Enter City Name or location above to get the <br/>current weather condition for that area</h4>
                }

                <h2>{props.description}</h2>

                {props.humidity ? (<h3><span className='px-4'>Humidity: {props.humidity}%</span></h3>) : null}
                {props.windSpeed ? (<h3><span className='px-4'>windSpeed: {props.windSpeed}%</span></h3>) : null}
                {/* <h3>
                <span className='px-4'>Humidity: {props.humidity}%</span>
                <span className='px-4'>Windspeed: {props.windSpeed}mph</span>
            </h3> */}

                {props.city ? (<h1 className='px-5 py-2'>Location | {props.city}</h1>) : null};
                {/* <h1 className='px-5 py-2'>Location | {props.city}</h1> */}
            </div>
        </div>
    );
};

export default Weather;