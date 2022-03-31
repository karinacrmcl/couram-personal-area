import React from "react";
import { ExplorationContainer } from "../containers/exploration";
import { FavouritesContainer } from "../containers/favourites";
import { useExtendedInfoContext } from "../context/extended-info";
import { TransitionWrapper } from "../shared/components/transition";

export default function Favourites() {
  const { isExtendedOpen } = useExtendedInfoContext();
  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, zIndex: -100, display: "none" },
  };

  return (
    <>
      <FavouritesContainer />
      <TransitionWrapper
        state={!isExtendedOpen}
        transitionStyles={transitionStyles}
        duration={200}
      >
        <ExplorationContainer />
      </TransitionWrapper>
    </>
  );
}
