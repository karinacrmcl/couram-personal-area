import React from "react";
import { CurrentCountryInfo } from "../../components/current-country-info";
import { CurrentCountryAddition } from "../../components/current-country-media";
import { SectionLayout } from "../../layouts/section";

export function MainContainer() {
  return (
    <SectionLayout title="Today's country">
      <CurrentCountryInfo />
      <CurrentCountryAddition />
    </SectionLayout>
  );
}
