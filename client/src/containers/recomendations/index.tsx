import React from "react";
import { RecomendedCountry } from "../../components/recomended-country";
import { SectionLayout } from "../../layouts/section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
import { useRecomendations } from "../../hooks/useRecomendations";
import { CountryBasicInfo } from "../../types/country";
import { TransitionWrapper } from "../../shared/components/transition";
import { useExtendedInfoContext } from "../../context/extended-info";
import "../../shared/styles/swiper.scss";
SwiperCore.use([Navigation]);

export function RecomendationsContainer() {
  const countries = useRecomendations();
  const isTabletSM = useMediaQuery({ maxWidth: "1100px" });
  const { isExtendedOpen } = useExtendedInfoContext();

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0, height: 0 },
    exited: { opacity: 0, zIndex: -100, height: 0 },
  };

  return (
    <SectionLayout title="Recomendations">
      <TransitionWrapper
        state={isExtendedOpen}
        transitionStyles={transitionStyles}
        styles={{ height: "400px" }}
        duration={200}
      >
        <Swiper navigation={true} slidesPerView={isTabletSM ? 1 : 2}>
          {countries?.data?.map(
            (item: CountryBasicInfo, i: React.Key | null | undefined) => {
              return (
                <SwiperSlide key={i}>
                  <RecomendedCountry item={item} />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </TransitionWrapper>
    </SectionLayout>
  );
}
