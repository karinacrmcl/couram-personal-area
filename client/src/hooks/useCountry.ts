import React, { useState, useEffect } from "react";
import axios from "axios";

export function useCountry(id: number) {
  let bar: any = {};
  const [country, setCountry] = useState(bar);
  useEffect(() => {
    const getCountry = async () => {
      axios
        .get(`https://couram.herokuapp.com/country?id=${id}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          params: {
            id: id,
          },
        })
        .then((res) => setCountry(res.data))
        .catch((error) => {
          console.log(error);
        });
    };
    id !== undefined ? getCountry() : void 0;
  }, [id]);
  return country;
}
