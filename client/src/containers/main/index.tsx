import React from "react";
import { CurrentCountryInfo } from "../../components/current-country-info";
import { CurrentCountryAddition } from "../../components/current-country-media";
import { SectionLayout } from "../../layouts/section";
import { TransitionWrapper } from "../../shared/components/transition";

import { useExtendedInfoContext } from "../../context/extended-info";
import CurrentCountryProvider from "../../provider/current-country";

export function MainContainer() {
  const { isExtendedOpen } = useExtendedInfoContext();

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0, height: 0 },
    exited: { opacity: 0, zIndex: -100, height: 0 },
  };

  return (
    <CurrentCountryProvider>
      <SectionLayout title="Today's country">
        <CurrentCountryInfo />
        <TransitionWrapper
          state={isExtendedOpen}
          duration={400}
          transitionStyles={transitionStyles}
          styles={{ height: "500px" }}
        >
          <CurrentCountryAddition />
        </TransitionWrapper>
      </SectionLayout>
    </CurrentCountryProvider>
  );
}
