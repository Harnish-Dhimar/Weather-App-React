import React from 'react';

function Result({ weatherData }) {
  if (!weatherData || !weatherData.main) {
    return <div className='disp'><h2>Please Enter City First...</h2></div>;
  }

  return (
    <div className='disp'>
      <h2>{weatherData.name}</h2>
      <div className="sec1">
        <h4>Max Temp: {weatherData.main.temp_max} Deg</h4>
        <h4>Min Temp: {weatherData.main.temp_min} Deg</h4>
      </div>
      {/* <div className="sec2">
        <div>Icon</div>
        <div>Weather Type</div>
      </div> */}
    </div>
  );
}

export default Result;
