import { useState, useEffect } from "react";

import fetchApi from "../api/fetchApi";

import Atmosphere from "../assets/Atmosphere.png";
import Thunderstorm from "../assets/Thunderstorm.png";
import Drizzle from "../assets/Drizzle.png";
import Rain from "../assets/Rain.png";
import Snow from "../assets/Snow.png";
import Clear from "../assets/Clear.png";
import Clouds from "../assets/Clouds.png";

const GetData = () => {
  const [data, setData] = useState(null);
  const [saerchCity, setsSaerchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [imags, setImags] = useState();
  const [state, setState] = useState();

  let c;

  const key = process.env.REACT_APP_API_KEY;
  const baseURL = process.env.REACT_APP_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    fetchApi
      .get(`${baseURL}/weather?q=${saerchCity}&appid=${key}&units=metric`)
      .then((res) => {
        setData(res.data);
        setState(res.data.weather[0].main);
        console.log(res.data);
        console.log(res.data.weather[0].main);
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

  const chooseImage = () => {
    switch (state) {
      case "Thunderstorm":
        return (c = Thunderstorm);
      case "Drizzle":
        return (c = Drizzle);
      case "Rain":
        return (c = Rain);
      case "Snow":
        return (c = Snow);
      case "Clear":
        return (c = Clear);
      case "Clouds":
        return (c = Clouds);
      default:
        return (c = Atmosphere);
    }
  };

  chooseImage();

  useEffect(() => {
    setImags(c);
  }, [c]);

  console.log(imags);

  return [data, saerchCity, setsSaerchCity, loading, error, fetchData, imags];
};

export default GetData;
