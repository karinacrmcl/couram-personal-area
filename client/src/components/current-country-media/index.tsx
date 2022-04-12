import React from "react";
import s from "./country.module.scss";

import { Information } from "./info";
import { Media } from "./media";

import { useCurrentCountryContext } from "../../context/current-country";

export function CurrentCountryAddition() {
  const context = useCurrentCountryContext();

  return (
    <div className={s.country}>
      <Media country={context.country} />
      <Information country={context.country} />
    </div>
  );
}
