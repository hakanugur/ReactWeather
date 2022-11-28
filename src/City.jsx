import React from 'react'

const City = ({city}) => {
const Url = "http://openweathermap.org/img/wn/";


  return (
    <div className='results'>
        <div><span>Şehir Adı</span>{city.name}</div>
        <div><span>Derece</span>{Math.round(city.main.temp)} °C</div>
        <div><span>Hava</span>{city.weather[0].description}</div>
        <div style={{marginLeft: "0"}}>
          <span>&nbsp;</span>
          <img src= {"http://openweathermap.org/img/wn/" + city.weather[0].icon + ".png"} alt="" />
        </div>
    </div>
  )
};

export default City;
