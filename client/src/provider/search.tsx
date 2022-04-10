import axios from "axios";
import React, { ReactNode, useState, useCallback } from "react";
import { Options, SearchContext } from "../context/search";

type Props = {
  children: ReactNode;
};

export default function SearchProvider({ children }: Props) {
  const [searchTerm, setSearchTerm] = useState<Options>({
    name: null,
    area: [],
    population: [],
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const setSearchTermHandler = (item: Options) => {
    setSearchTerm(item);
  };

  //   const getResults = async (url: string) => {
  //     setLoading(true);

  //     const res = await axios
  //       .get(`${process.env.REACT_APP_API_URL}/recomendations`, {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       })
  //       .then((res) => setResults(res.data))
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     return res;
  //   };

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm: setSearchTermHandler }}
    >
      {children}
    </SearchContext.Provider>
  );
}
