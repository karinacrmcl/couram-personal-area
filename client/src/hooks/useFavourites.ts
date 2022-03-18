// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { CountryFullInfo } from "../types/country";

// export function useFavourites(ids: number[]) {
//   let bar: any = {};
//   const [favourites, setFavourites] = useState<CountryFullInfo[]>([]);

//   useEffect(() => {
//     const getFavourite = async (id: number) => {
//       // console.log("id", id);
//       axios
//         .get(`${process.env.REACT_APP_API_URL}/country?id=${id}`, {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//           },
//           params: {
//             id: id,
//           },
//         })
//         .then((res) => {
//           // console.log("data", res.data);
//           return res.data;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//     return () => {
//     console.log(getFavourite(1));
//     };

//     // setFavourites(favourites);
//     // ids?.map(async (id: number) => {
//     //   const country: CountryFullInfo = getFavourite(id);
//     //   setFavourites(favourites.concat(country));
//     // });
//   }, [ids]);
//   // return favourites;
// }
//----------------------------------

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CountryFullInfo } from "../types/country";

export function useFavourites(ids: number[]) {
  let bar: any = {};
  const [favourites, setFavourites] = useState<CountryFullInfo[]>([]);

  useEffect(() => {
    const getFavourites = async (ids: number[]) => {
      const countries = ids.map((id) => {
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
            setFavourites(favourites.concat(res.data));
          })
          .catch((error) => {
            console.log(error);
          });
      });

      return countries;
    };
    getFavourites(ids);
  }, []);
  return favourites;
}
