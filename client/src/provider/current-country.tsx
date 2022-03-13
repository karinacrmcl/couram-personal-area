import React, { ReactNode, useState } from "react";
import {
  CurrentCountryContext,
  useCurrentCountry,
} from "../context/current-country";
import { useBasicInfo } from "../hooks/useBasicInfo";
import { useCityWeather } from "../hooks/useCityWeather";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useBasicInfo("Netherlands");
  const weather = useCityWeather("Amsterdam");

  console.log({ country, weather });

  return (
    <CurrentCountryContext.Provider value={{ country, weather }}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
