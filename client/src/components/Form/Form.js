import React from 'react';
import './Form.css';

const SearchForm = (props) => {
  return (
    <div className="container">
      <div>
        {props.error ? error() : null};
      </div>
      <form onSubmit={props.loadWeather}>
        <div className="row m-5">
          <div className="col-md-10">
            <input placeholder="Search for Location " type="text" className="form-control" name="city" autoComplete="off" />
          </div>
          <div className="col-md-2">
            <button className="btn btn-warning">Enter</button>
          </div>
        </div>
      </form>
    </div>
  )
};


function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City Name
    </div>
  )
};
export default SearchForm;