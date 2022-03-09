import { createContext, useContext } from "react";
import { CountryBasicInfo } from "../types/country";

interface ContextState {
  country: CountryBasicInfo;
}

export const CurrentCountryContext = createContext({} as ContextState);
export const useCurrentCountry = () => useContext(CurrentCountryContext);
