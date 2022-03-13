import React, { useState, useEffect } from "react";
import axios from "axios";

export function useCityWeather(name: string) {
  let bar: any = {};
  const [weather, setWeather] = useState(bar);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/weather?cityName=${name}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          cityName: name,
        },
      })
      .then((res) => setWeather(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return weather;
}
