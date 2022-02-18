import React from "react";
import { useMediaQuery } from "react-responsive";
import { CardLayout } from "../../layouts/card";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./country.module.scss";

type Props = {
  item: {
    name: string;
    capital: string;
    location: string;
    bgUrl: string;
  };
};

export function RecomendedCountry({ item }: Props) {
  const isLaptop = useMediaQuery({ maxWidth: "1320px" });
  const isTablet = useMediaQuery({ maxWidth: "1212px" });
  const isTabletSM = useMediaQuery({ maxWidth: "1100px" });

  return (
    <div className={s.country}>
      <CardLayout
        type="small"
        bgUrl={item.bgUrl}
        styles={{
          width: isTabletSM
            ? "100%"
            : isTablet
            ? "500px"
            : isLaptop
            ? "550px"
            : "600px",
          height: isTabletSM
            ? "500px"
            : isTablet
            ? "310px"
            : isLaptop
            ? "350px"
            : "386px",
        }}
      >
        <div className={s.country_content}>
          <h2> {item.name} </h2>
          <h4> {item.capital} </h4>

          <div className={s.country_bottom}>
            <div className={s.country_location}>
              <GlobalSelector id="location" />
              <p>{item.location} </p>
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
          </div>

          <Favourite onClick={() => console.log("recomended")} active={false} />
        </div>
        <div className={s.country_shadow}></div>
      </CardLayout>
    </div>
  );
}
