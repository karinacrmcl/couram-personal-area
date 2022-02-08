import { url } from "inspector";
import React from "react";
import { CardLayout } from "../../layouts/card";
import Favourites from "../../pages/favourites";
import { Button } from "../../shared/components/button";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./country.module.scss";
import SvgSelector from "./svg-selector";

type Props = {};

export function CurrentCountryInfo(props: Props) {
  const countryBasicInfo = [
    { title: "Capital", index: "capital", content: "Vaduz" },
    { title: "Language", index: "language", content: "German" },
    { title: "Total size", index: "total_size", content: "160 square km" },
  ];

  const countryStats = [
    { iconId: "popualtion", index: "popualtion", content: "37 132 " },
    { iconId: "currency", index: "currency", content: "Swiss Franc" },
    { iconId: "location", index: "location", content: "Central Europe" },
    { iconId: "climate", index: "climate", content: "Continental" },
  ];

  return (
    <div className={s.country}>
      <CardLayout
        type="large"
        bgUrl="/images/example-bg-1.jpg"
        styles={{ height: "600px" }}
      >
        <div className={s.country_container}>
          <h2 className={s.country_title}>Liechtenstein</h2>
          <p className={s.country_description}>
            Liechtenstein is a small country located between Austria and
            Switzerland.
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

        <Favourite active={false} onClick={() => console.log("favourited")} />
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
            <h3>Liechtenstein</h3>
          </div>
          <Button size="large">
            <GlobalSelector id="play" />
          </Button>
        </div>
      </div>
    </div>
  );
}
