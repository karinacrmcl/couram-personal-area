import { createContext } from "react";
import { CountryBasicInfo } from "../types/country";

interface ContextState {
  // set the type of state you want to handle with context e.g.
  country: CountryBasicInfo | null;
}
//set an empty object as default state
export const CurrentCountryContext = createContext({} as ContextState);
