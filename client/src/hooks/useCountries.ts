import axios from "axios";
import { error } from "console";
import React, { useState, useEffect } from "react";

export function useCountries() {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/countries`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setCountries(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return countries;
}
