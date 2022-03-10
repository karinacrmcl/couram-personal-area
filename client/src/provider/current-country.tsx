import React, { ReactNode, useState } from "react";
import {
  CurrentCountryContext,
  useCurrentCountry,
} from "../context/current-country";
import { useBasicInfo } from "../hooks/useBasicInfo";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useBasicInfo("Germany");

  return (
    <CurrentCountryContext.Provider value={{ country }}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
