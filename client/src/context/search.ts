import { createContext, useContext } from "react";

type ContextState = {
  searchTerm: string | null;
  setSearchTerm: (item: string) => void;
  results: [];
  setResults: (items: string) => void;
};

export const SearchContext = createContext({} as ContextState);
export const useSearchContext = () => useContext(SearchContext);
