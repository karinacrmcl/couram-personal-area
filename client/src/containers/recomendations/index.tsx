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
SwiperCore.use([Navigation]);

export function RecomendationsContainer() {
  const countries = useRecomendations();
  const isTabletSM = useMediaQuery({ maxWidth: "1100px" });

  console.log("tf", countries);

  return (
    <SectionLayout title="Recomendations">
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
    </SectionLayout>
  );
}
