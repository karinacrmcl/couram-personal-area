import React from "react";
import s from "./country.module.scss";
import { Information } from "./info";
import { Media } from "./media";

export function CurrentCountryAddition() {
  return (
    <div className={s.country}>
      <Media />
      <Information />
    </div>
  );
}
