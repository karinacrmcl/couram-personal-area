import React from "react";
import { CurrentCountryInfo } from "../../components/current-country-info";
import { CurrentCountryAddition } from "../../components/current-country-media";
import { useBasicInfo } from "../../hooks/useBasicInfo";
import { SectionLayout } from "../../layouts/section";
import CurrentCountryProvider from "../../provider/current-country";

export function MainContainer() {
  const country = useBasicInfo("Canada");

  return (
    <CurrentCountryProvider>
      <SectionLayout title="Today's country">
        <CurrentCountryInfo country={country} />
        <CurrentCountryAddition />
      </SectionLayout>
    </CurrentCountryProvider>
  );
}
