import React from "react";
import { CountryCard } from "../../components/country-card";
import { useExtendedInfoContext } from "../../context/extended-info";
import { useCountries } from "../../hooks/useCountries";
import { SectionLayout } from "../../layouts/section";
import { CountryBasicInfo } from "../../types/country";

import s from "./all-countries.module.scss";

export function AllCountriesContainer() {
  const { isExtendedOpen } = useExtendedInfoContext();

  const countryList = useCountries();

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0, height: 0 },
    exited: { opacity: 0, zIndex: -100, height: 0 },
  };

  return (
    <SectionLayout title="All countries">
      <div className={s.allcountries}>
        {countryList?.data?.map((item: CountryBasicInfo) => {
          return <CountryCard key={item.id} item={item} />;
        })}
      </div>
    </SectionLayout>
  );
}
