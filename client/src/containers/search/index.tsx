import React from "react";

import { Search } from "../../components/search";
import { SectionLayout } from "../../layouts/section";

import { useCurrentCountryContext } from "../../context/current-country";

type Props = {};

export function SearchContainer({}: Props) {
  const { country } = useCurrentCountryContext();

  return (
    <SectionLayout title="Search">
      <Search bgUrl={country?.coverPhoto?.largeUrl} />
    </SectionLayout>
  );
}
