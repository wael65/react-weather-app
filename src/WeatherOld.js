import { useState } from "react";

import axios from "axios";

function WeatherOld() {
  const [data, setData] = useState(null);
  const [saerchCity, setsSaerchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${saerchCity}&appid=0cb2908b500b15dcc33edef5b4168a02&units=metric`
      )
      .then((res) => {
        setData(res.data);
        // setCity(res.data.name);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log("Show error notification!");
        // return Promise.reject(error);
        setData("");
        setError(true);
        return null;
      });

    setLoading(false);
    setsSaerchCity("");
  };

  return (
    <>
      <div className="main">Weather App</div>
      <div className="main">
        <div>
          <input
            type="text"
            value={saerchCity}
            placeholder="Enter city/town..."
            onChange={(e) => setsSaerchCity(e.target.value)}
          />

          <button onClick={fetchData}>Search</button>
        </div>
        {loading && <h1>Loading....</h1>}
        {data ? (
          <div>
            <p>
              <span className="data">city :</span> {data.name}
            </p>
            <p>
              <span className="data">Temp :</span> {data.main.temp} °C
            </p>
            <p>
              <span className="data">Humidity :</span> {data.main.humidity} %
            </p>
            <p>
              <span className="data">Condtion :</span>{" "}
              {data.weather[0].description}
            </p>
          </div>
        ) : error ? (
          <h3 style={{ color: "red" }}>
            There Is no City With This Name, Inter a Valid City Name
          </h3>
        ) : (
          <p>Inter city name</p>
        )}
      </div>
    </>
  );
}

export default WeatherOld;
