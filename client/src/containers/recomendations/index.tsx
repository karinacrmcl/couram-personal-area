import React from "react";
import { RecomendedCountry } from "../../components/recomended-country";
import { SectionLayout } from "../../layouts/section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

export function RecomendationsContainer() {
  const countries = [
    {
      name: "Germany",
      capital: "Berlin",
      location: "Germany, Eibsee",
      bgUrl: "/images/example-bg-3.jpg",
    },
    {
      name: "Hungary",
      capital: "Budapest",
      location: "Hungary, Budapest",
      bgUrl: "/images/example-bg-4.jpg",
    },
    {
      name: "Germany",
      capital: "Berlin",
      location: "Germany, Eibsee",
      bgUrl: "/images/example-bg-3.jpg",
    },
    {
      name: "Hungary",
      capital: "Budapest",
      location: "Hungary, Budapest",
      bgUrl: "/images/example-bg-4.jpg",
    },
    {
      name: "Germany",
      capital: "Berlin",
      location: "Germany, Eibsee",
      bgUrl: "/images/example-bg-3.jpg",
    },
    {
      name: "Hungary",
      capital: "Budapest",
      location: "Hungary, Budapest",
      bgUrl: "/images/example-bg-4.jpg",
    },
  ];

  return (
    <SectionLayout title="Recomendations">
      <Swiper navigation={true} slidesPerView={2}>
        {countries.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <RecomendedCountry item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SectionLayout>
  );
}
