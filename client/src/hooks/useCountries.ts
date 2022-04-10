import axios from "axios";
import React, { useState, useEffect } from "react";

export function useCountries() {
  let bar: any = {};
  const [countries, setCountries] = useState(bar);
  useEffect(() => {
    async function getCountries() {
      return await axios
        .get(`${process.env.REACT_APP_API_URL}/countries`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => setCountries(res.data))
        .catch((error) => {
          console.log(error);
        });
    }
    getCountries();
  }, []);

  return countries;
}
