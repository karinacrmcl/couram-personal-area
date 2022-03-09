import React, { ReactNode, useState } from "react";
import {
  CurrentCountryContext,
  useCurrentCountry,
} from "../context/current-country";
import { useBasicInfo } from "../hooks/useBasicInfo";
import { defaultState } from "../shared/constants/current-country";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useBasicInfo("France");

  return (
    <CurrentCountryContext.Provider value={{ country }}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
