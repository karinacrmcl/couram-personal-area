import { url } from "inspector";
import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
  CurrentCountryContext,
  useCurrentCountry,
} from "../../context/current-country";
import { useBasicInfo } from "../../hooks/useBasicInfo";
import { useCountries } from "../../hooks/useCountries";
import { CardLayout } from "../../layouts/card";
import Favourites from "../../pages/favourites";
import { Button } from "../../shared/components/button";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./country.module.scss";
import SvgSelector from "./svg-selector";

export function CurrentCountryInfo() {
  const isTablet = useMediaQuery({ maxWidth: "950px" });
  const isMobile = useMediaQuery({ maxWidth: "450px" });

  const context = useContext(CurrentCountryContext);
  const countryBasicInfo = [
    { title: "Capital", index: "capital", content: context.country?.capital },
    {
      title: "Language",
      index: "language",
      content: context.country?.languages[0],
    },
    {
      title: "Total size",
      index: "total_size",
      content: `${context.country?.totalSize} km² `,
    },
  ];

  const countryStats = [
    {
      iconId: "popualtion",
      index: "popualtion",
      content: context.country?.population,
    },
    {
      iconId: "currency",
      index: "currency",
      content: context.country?.currencies[0],
    },
    {
      iconId: "location",
      index: "location",
      content: context.country?.subregion,
    },
    { iconId: "climate", index: "climate", content: context.country?.climate },
  ];

  return (
    <div className={s.country}>
      <CardLayout
        type="large"
        bgUrl="/images/example-bg-1.jpg"
        styles={{ height: isMobile ? "450px" : isTablet ? "500px" : "600px" }}
      >
        <div className={s.country_container}>
          <h2 className={s.country_title}>{context.country?.name}</h2>
          <p className={s.country_description}>
            {context.country?.shortDescription}
          </p>

          <div className={s.country_info}>
            {countryBasicInfo.map((item, i) => {
              return (
                <div className={s.country_info_item} key={i}>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>

          <div className={s.country_state}>
            <div className={s.country_state_item}>
              <p>Temperature</p>
              <h3>33°F</h3>
            </div>
            <hr />
            <div className={s.country_state_item}>
              <p>Fri, 28 Jan</p>
              <h3>16:00</h3>
            </div>
          </div>

          <div className={s.country_shadow}></div>
        </div>
        <Favourite active={false} onClick={() => console.log()} />
      </CardLayout>
      <div className={s.country_bottom}>
        <div className={s.country_stats}>
          {countryStats.map((item, i) => {
            return (
              <div className={s.country_stats_item} key={i}>
                <SvgSelector id={item.iconId} />
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
        <div className={s.country_start}>
          <div className={s.country_start_text}>
            <p>Start exploring</p>
            <h3>{context.country?.name}</h3>
          </div>
          <Button size="large">
            <GlobalSelector id="play" />
          </Button>
        </div>
      </div>
    </div>
  );
}
