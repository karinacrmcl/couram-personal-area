import React, { useState, useEffect } from "react";
import axios from "axios";
import { CountryFullInfo } from "../types/country";

export function useFavourites(ids: number[]) {
  const [favourites, setFavourites] = useState([]);
  const [response, setresponse] = useState([]);

  useEffect(() => {
    const getFavourites = async (ids: number[]) => {
      ids.map((id) => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/country?id=${id}`, {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            params: {
              id: id,
            },
          })
          .then((res) => {
            setresponse(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    };
    getFavourites(ids);
  }, []);

  useEffect(() => {
    setFavourites(favourites.concat(response));
  }, [response]);

  return favourites;
}
