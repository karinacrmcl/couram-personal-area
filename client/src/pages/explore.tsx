import React from "react";
import { ResultsContainer } from "../containers/results";
import { SearchContainer } from "../containers/search";
import CurrentCountryProvider from "../provider/current-country";

export default function ExploreMore() {
  return (
    <CurrentCountryProvider>
      <SearchContainer />
      <ResultsContainer />
    </CurrentCountryProvider>
  );
}
