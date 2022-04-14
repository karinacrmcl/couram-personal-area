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

  const setSearchTermHandler = (item: Options) => {
    setSearchTerm(item);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm: setSearchTermHandler }}
    >
      {children}
    </SearchContext.Provider>
  );
}
