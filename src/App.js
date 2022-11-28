import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = "a70e7d08b5892f62a85660cf13d4ff27";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric&lang=tr`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }getApi();
  },[search]);
  return (
      <div>
        <div className='input_row'>
          <img src="./src.svg" alt="src" />
          <input type="text" onChange={(e) => setSearch(e.target.value) } placeholder="Şehir arayın..." />
        </div>
        {city && <City city={city} />}
      </div>
  );
}

export default App;
