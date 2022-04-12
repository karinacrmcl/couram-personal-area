import React from "react";
import { ExplorationContainer } from "../containers/exploration";
import { MainContainer } from "../containers/main";
import { RecomendationsContainer } from "../containers/recomendations";
import { useExtendedInfoContext } from "../context/extended-info";
import ModalProvider from "../provider/modal";
import { TransitionWrapper } from "../shared/components/transition";

export default function Home() {
  const { isExtendedOpen } = useExtendedInfoContext();
  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, zIndex: -100, display: "none" },
  };

  return (
    <ModalProvider>
      <MainContainer />
      <RecomendationsContainer />
      <TransitionWrapper
        state={!isExtendedOpen}
        transitionStyles={transitionStyles}
        duration={200}
      >
        <ExplorationContainer />
      </TransitionWrapper>
    </ModalProvider>
  );
}
