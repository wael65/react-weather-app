import React, { useState } from "react";
import axios from "axios";

function ManarApi() {
  const api = {
    key: "559574c6e11f337cda24c652a1830c43",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setsearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = async () => {
    // fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setWeather(data);
    //   });
    axios
      .get(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch(function (error) {
        console.log("Show error notification!");
        return null;
      });
    setsearch("");
  };

  //   useEffect(() => {
  //     setsearch("");
  //   }, [city]);

  return (
    <div>
      {/* header */}
      <h1>Weather App</h1>
      {/* search Box */}
      <div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setsearch(e.target.value)}
          value={search}
        />

        <button onClick={searchPressed}>Search</button>
      </div>
      {weather.main ? (
        <div>
          {/* location */}

          <p>
            <span style={{ color: "#91ace1" }}>City :</span> {weather.name}
          </p>

          {/* Tempreture F/C */}
          <p>
            <span style={{ color: "#91ace1" }}>Tempreture :</span>{" "}
            {weather.main.temp}
          </p>

          {/* Condtion (Sunny) */}
          <p>
            <span style={{ color: "#91ace1" }}>Condtion :</span>{" "}
            {weather.weather[0].main}
          </p>
          <p>
            <span style={{ color: "#91ace1" }}>Condtion :</span>{" "}
            {weather.weather[0].description}
          </p>
        </div>
      ) : (
        <h4 style={{ color: "red" }}> Inter a Valid City Name </h4>
      )}
    </div>
  );
}

export default ManarApi;
