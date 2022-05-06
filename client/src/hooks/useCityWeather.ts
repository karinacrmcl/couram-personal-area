import React, { useState, useEffect } from "react";
import axios from "axios";

export function useCityWeather(name: string) {
  let bar: any = {};
  const [weather, setWeather] = useState(bar);
  useEffect(() => {
    const getWeather = async () => {
      axios
        .get(`https://couram.herokuapp.com/weather?cityName=${name}`, {
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
    };
    name !== undefined ? getWeather() : void 0;
  }, [name]);
  return weather;
}
