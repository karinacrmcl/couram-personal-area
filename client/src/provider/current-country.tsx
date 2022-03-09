import React, { ReactNode, useState } from "react";
import { CurrentCountryContext } from "../context/current-country";
import { useBasicInfo } from "../hooks/useBasicInfo";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useBasicInfo("Canada");

  return (
    <CurrentCountryContext.Provider value={country}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
