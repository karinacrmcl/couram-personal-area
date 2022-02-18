import React from "react";
import { MainContainer } from "../containers/main";
import { RecomendationsContainer } from "../containers/recomendations";
import { ResultsContainer } from "../containers/results";
import { SearchContainer } from "../containers/search";

export default function Home() {
  return (
    <div>
      <MainContainer />
      <RecomendationsContainer />
      {/*  <SearchContainer />
      <ResultsContainer /> */}
    </div>
  );
}
