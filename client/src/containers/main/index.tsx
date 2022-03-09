import React from "react";
import { CurrentCountryInfo } from "../../components/current-country-info";
import { CurrentCountryAddition } from "../../components/current-country-media";
import { useCurrentCountry } from "../../context/current-country";
import { useBasicInfo } from "../../hooks/useBasicInfo";
import { SectionLayout } from "../../layouts/section";
import CurrentCountryProvider from "../../provider/current-country";

export function MainContainer() {
  return (
    <CurrentCountryProvider>
      <SectionLayout title="Today's country">
        <CurrentCountryInfo />
        <CurrentCountryAddition />
      </SectionLayout>
    </CurrentCountryProvider>
  );
}
