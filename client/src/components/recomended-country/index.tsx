import React from "react";
import { useMediaQuery } from "react-responsive";
import { useExtendedInfoContext } from "../../context/extended-info";
import { useCityWeather } from "../../hooks/useCityWeather";
import { CardLayout } from "../../layouts/card";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import { CountryBasicInfo } from "../../types/country";
import { checkStoredIds, storeId } from "../../utils/local-storage";
import { structureWeatherData } from "../../utils/structure-state-data";
import s from "./country.module.scss";

type Props = {
  item: CountryBasicInfo;
};

export function RecomendedCountry({ item }: Props) {
  const isLaptop = useMediaQuery({ maxWidth: "1320px" });
  const isTablet = useMediaQuery({ maxWidth: "1212px" });
  const isTabletSM = useMediaQuery({ maxWidth: "1100px" });
  const isMobile = useMediaQuery({ maxWidth: "650px" });

  const weather = useCityWeather(item?.capital);
  const { degrees, time, date } = structureWeatherData(weather);
  const { isExtendedOpen } = useExtendedInfoContext();

  return (
    <div className={s.country}>
      <CardLayout
        type="small"
        bgUrl={item?.coverPhoto?.largeUrl}
        styles={{
          width: isTabletSM
            ? "100%"
            : isTablet
            ? "500px"
            : isLaptop
            ? "550px"
            : "600px",
          height: isMobile
            ? "420px"
            : isTabletSM
            ? "500px"
            : isTablet
            ? "310px"
            : isLaptop
            ? "350px"
            : "386px",
        }}
        resize={{ state: isExtendedOpen, styles: { height: 0, width: 0 } }}
      >
        <div className={s.country_content}>
          <h2> {item.name} </h2>
          <h4> {item.capital} </h4>

          <div className={s.country_bottom}>
            <div className={s.country_location}>
              <GlobalSelector id="location" />
              <p>{`${item?.capital}, ${item?.name}`} </p>
            </div>
            <div className={s.country_state}>
              <div className={s.country_state_item}>
                <p>Temperature</p>
                <h3>{degrees}°C</h3>
              </div>
              <hr />
              <div className={s.country_state_item}>
                <p>{date}</p>
                <h3>{time}</h3>
              </div>
            </div>
          </div>

          <Favourite
            onClick={() => storeId(item?.id)}
            active={checkStoredIds(item.id)}
          />
        </div>
        <div className={s.country_shadow}></div>
      </CardLayout>
    </div>
  );
}
