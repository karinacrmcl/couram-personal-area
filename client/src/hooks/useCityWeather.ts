export function useCityWeather(name: string) {
  let bar: any = {};
  const [weather, setWeather] = useState(bar);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/weather`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {},
      })
      .then((res) => setWeather(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return weather;
}
import axios from "axios";
import React, { useState, useEffect } from "react";
