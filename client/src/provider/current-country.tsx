import React, { ReactNode, useState } from "react";
import { CurrentCountryContext } from "../context/current-country";
import { useCityWeather } from "../hooks/useCityWeather";
import { useCurrentCountry } from "../hooks/useCurrentCountry";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useCurrentCountry();
  const weather = useCityWeather("Amsterdam");

  console.log(country);

  return (
    <CurrentCountryContext.Provider value={{ country, weather }}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
