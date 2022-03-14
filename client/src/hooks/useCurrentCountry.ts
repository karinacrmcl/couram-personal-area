import { useEffect, useState } from "react";
import axios from "axios";

export function useCurrentCountry() {
  let bar: any = {};
  const [country, setCountry] = useState(bar);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/current-country`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setCountry(res.data.data[0]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return country;
}
