import React, { ReactNode, useEffect, useState } from "react";
import { CurrentCountryContext } from "../context/current-country";
import { useCityWeather } from "../hooks/useCityWeather";
import { useCurrentCountry } from "../hooks/useCurrentCountry";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useCurrentCountry();

  // useEffect(() => {
  //   return () => {
  //   };
  // }, [country]);

  console.log(country.capital);

  return (
    <CurrentCountryContext.Provider value={{ country }}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
