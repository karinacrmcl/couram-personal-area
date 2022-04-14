import React from "react";
import { CountryCard } from "../../components/country-card";
import { SectionLayout } from "../../layouts/section";
import { CountryBasicInfo } from "../../types/country";

import { useCountries } from "../../hooks/useCountries";

import s from "./all-countries.module.scss";

export function AllCountriesContainer() {
  const countryList = useCountries();

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
