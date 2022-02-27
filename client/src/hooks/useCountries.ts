import axios from "axios";
import { error } from "console";
import React, { useState, useEffect } from "react";

// interface ApiResponse {
//   data: ApiData;
// }

// interface ApiData {
//   foo: string;
//   bar: number;
// }

export function useCountries() {
  const [countries, setCountries] = useState({});

  // useEffect(() => {
  //   axios
  //     .request<ApiData>({
  //       url: `${process.env.REACT_APP_APIURL}/countries`,
  //       // transformResponse: (r: ApiResponse) => r.data,
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     })
  //     .then((response) => {
  //       const { data } = response;
  //       setCountries(data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.error);
  //     });
  // });

  // return countries;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/countries`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setCountries(res))
      .catch((error) => {
        console.log(error);
      });
    //   window.open(
    //     `https://stackoverflow.com/search?q=${error.message}`,
    //     "_blank"
    //   );
    // console.log("ok");
  }, []);

  return countries;
}
