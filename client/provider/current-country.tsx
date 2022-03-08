import React, { useState } from "react";
import { CurrentCountryContext } from "../context/current-country";

export default function CurrentCountryProvider({ children }) {
  const [currentCountry, setCurrentCountry] = useState({});

  return (
    <CurrentCountryContext.Provider value={(currentCountry, setCurrentCountry)}>
      {children}
    </CurrentCountryContext.Provider>
  );
}
