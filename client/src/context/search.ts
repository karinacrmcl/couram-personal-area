import { createContext, ReactNode, useContext } from "react";

export type Options = {
  name: string | null;
  size: number | null;
  population: number | null;
};

type ContextState = {
  searchTerm: Options;
  setSearchTerm: (item: Options) => void;
};

export const SearchContext = createContext({} as ContextState);
export const useSearchContext = () => useContext(SearchContext);
