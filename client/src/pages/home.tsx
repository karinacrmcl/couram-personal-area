import React from "react";
import { MainContainer } from "../containers/main";
import { RecomendationsContainer } from "../containers/recomendations";
import { ResultsContainer } from "../containers/results";
import { SearchContainer } from "../containers/search";
import ModalProvider from "../provider/modal";

export default function Home() {
  return (
    <div>
      <ModalProvider>
        <MainContainer />

        <RecomendationsContainer />
        <SearchContainer />
        {/*    <ResultsContainer /> */}
      </ModalProvider>
    </div>
  );
}
