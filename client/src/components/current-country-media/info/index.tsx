import React from "react";
import { useMediaQuery } from "react-responsive";
import { CardLayout } from "../../../layouts/card";
import { Button } from "../../../shared/components/button";
import { CountryBasicInfo } from "../../../types/country";
import { structureCountryData } from "../../../utils/structure-current-country";
import SvgSelector from "../svg-selector";
import s from "./info.module.scss";

type Props = {
  country: CountryBasicInfo;
};

export function Information({ country }: Props) {
  const isLaptop = useMediaQuery({ maxWidth: "1200px" });
  // const { factsContent } = structureCountryData(country);

  return (
    <div className={s.info}>
      <CardLayout
        type="small"
        styles={{
          width: isLaptop ? "100%" : "700px",
          height: isLaptop ? "100%" : "460px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className={s.info_content}>
          <div className={s.info_heading}>
            <h2>Interesting {country?.name} Facts</h2>
            <p>What unique things can you discover about {country?.name}?</p>
          </div>
          <div className={s.info_facts}>
            {/* {factsContent?.map((item, i) => {
              return (
                <div key={i} className={s.info_fact}>
                  <SvgSelector id="question" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })} */}
          </div>
          <Button size="small">
            <SvgSelector id="map" />
          </Button>
        </div>
      </CardLayout>
    </div>
  );
}
