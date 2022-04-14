import React, { ReactNode, useEffect, useState } from "react";
import { CurrentCountryContext } from "../context/current-country";
import { useCurrentCountry } from "../hooks/useCurrentCountry";

type Props = {
  children: ReactNode;
};

export default function CurrentCountryProvider({ children }: Props) {
  const country = useCurrentCountry();

  return (
    <CurrentCountryContext.Provider value={{ country }}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
