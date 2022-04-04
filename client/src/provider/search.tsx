import axios from "axios";
import React, { ReactNode, useState, useCallback } from "react";
import { SearchContext } from "../context/search";

type Props = {
  children: ReactNode;
};

export default function SearchProvider({ children }: Props) {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [results, setResults] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  const setSearchTermHandler = (item: string) => {
    setSearchTerm(item);
  };

  const setResultsHandler = async (url: string) => {
    setLoading(true);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm: setSearchTermHandler,
        results,
        setResults: setResultsHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
