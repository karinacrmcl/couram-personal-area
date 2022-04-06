import React from "react";
import { ResultsContainer } from "../containers/results";
import { SearchContainer } from "../containers/search";
import CurrentCountryProvider from "../provider/current-country";
import SearchProvider from "../provider/search";

export default function ExploreMore() {
  return (
    <CurrentCountryProvider>
      <SearchProvider>
        <SearchContainer />
        <ResultsContainer />
      </SearchProvider>
    </CurrentCountryProvider>
  );
}
