import React from "react";
import { CurrentCountryInfo } from "../../components/current-country-info";
import { CurrentCountryAddition } from "../../components/current-country-media";
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
