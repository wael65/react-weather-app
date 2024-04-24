import React from "react";
import axios from "axios";

const fetchApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URLBASE_URL,
});

export default fetchApi;
