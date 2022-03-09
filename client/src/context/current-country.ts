import { createContext, useContext } from "react";
import { defaultState } from "../shared/constants/current-country";
import { CountryBasicInfo } from "../types/country";

interface ContextState {
  country: CountryBasicInfo | null;
}

export const CurrentCountryContext = createContext({} as ContextState);
export const useCurrentCountry = () => useContext(CurrentCountryContext);
