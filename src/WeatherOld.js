import { useState } from "react";

import axios from "axios";
import GetData from "./hooks/getData";

function WeatherOld() {
  const [data, saerchCity, setsSaerchCity, loading, error, fetchData] =
    GetData();
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
