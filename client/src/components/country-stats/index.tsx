import React from "react";
import { CountryFullInfo } from "../../types/country";
import { structureCountryData } from "../../utils/structure-current-country";
import s from "./country-stats.module.scss";
import SvgSelector from "./svg-selector";

type Props = {
  country: {
    data: CountryFullInfo[];
  };
};

type StatsItem = {
  item: {
    label: string;
    iconId: string;
    content: string | number | string[];
    index?: string | undefined;
  };
};

function CountryStatsItem({ item }: StatsItem) {
  return (
    <div className={s.countrystats_item_container}>
      <SvgSelector id={item.iconId} />
      <h4>{item.label}</h4>
      <p>{item?.content}</p>
    </div>
  );
}

export function CountryStats({ country }: Props) {
  const { countryBasicInfo, countryStats } = structureCountryData(
    country.data?.[0]
  );
  const stats = [...countryBasicInfo, ...countryStats];

  return (
    <div className={s.countrystats}>
      <div className={s.countrystats_content}>
        {stats.map((item) => (
          <CountryStatsItem item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
}
