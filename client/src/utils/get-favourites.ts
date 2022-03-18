import React from "react";
import { useCountry } from "../hooks/useCountry";
import { getStoredIds } from "./local-storage";

type Props = {};

export function getFavourites() {
  const names = getStoredIds();
  console.log(names);
  const countries = names.forEach((name: string) => {
    return useCountry(name);
  });
  console.log(countries);
  return countries;
}
