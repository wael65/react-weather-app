import { useState } from "react";

import fetchApi from "../api/fetchApi";

const GetData = () => {
  const [data, setData] = useState(null);
  const [saerchCity, setsSaerchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const key = process.env.REACT_APP_API_KEY;
  const baseURL = process.env.REACT_APP_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    fetchApi
      .get(`${baseURL}/weather?q=${saerchCity}&appid=${key}&units=metric`)
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

  return [data, saerchCity, setsSaerchCity, loading, error, fetchData];
};

export default GetData;
