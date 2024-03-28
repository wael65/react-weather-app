import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=0cb2908b500b15dcc33edef5b4168a02&units=metric`
      )
      .then((res) => {
        setData(res.data.main);
        setCity(res.data.name);
      });
  };

  return (
    <>
      <div className="App">Weather App</div>
      <div className="body">
        <button className="button" onClick={fetchData}>
          Fetch Data
        </button>
        {data ? console.log(data) : ""}
        <h3>City: {city}</h3>
        <h3>Temp: {data.temp}</h3>
      </div>
    </>
  );
}

export default App;
