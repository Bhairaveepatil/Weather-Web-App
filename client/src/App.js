import React from 'react';
import Error from './components/Error/Error';
import MainWeatherInfo from './MainweatherInfo';
import {Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainWeatherInfo/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App