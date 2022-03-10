import React from "react";
import { useCurrentCountry } from "../../context/current-country";
import s from "./country.module.scss";
import { Information } from "./info";
import { Media } from "./media";

export function CurrentCountryAddition() {
  const context = useCurrentCountry();

  return (
    <div className={s.country}>
      <Media country={context.country} />
      <Information country={context.country} />
    </div>
  );
}
