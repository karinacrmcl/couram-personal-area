import React from "react";
import { useMediaQuery } from "react-responsive";
import { CardLayout } from "../../../layouts/card";
import { Button } from "../../../shared/components/button";
import SvgSelector from "../svg-selector";
import s from "./info.module.scss";

type Props = {};

export function Information(props: Props) {
  const isLaptop = useMediaQuery({ maxWidth: "1200px" });

  const factsContent = [
    {
      name: "Situation",
      value:
        "Liechtenstein is situated in the Upper Rhine valley of the European Alps.",
      key: 1,
    },
    {
      name: "Location",
      value:
        "Liechtenstein lies on the east bank of the Rhine River south of Lake Constance between Austria and Switzerland. It consists of low valley land and Alpine peaks.",
      key: 2,
    },
  ];

  return (
    <div className={s.info}>
      <CardLayout
        type="small"
        styles={{
          width: isLaptop ? "100%" : "700px",
          height: "460px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className={s.info_content}>
          <div className={s.info_heading}>
            <h2>Interesting Liechtenstein Facts</h2>
            <p>What unique things can you discover about Liechtenstein?</p>
          </div>
          <div className={s.info_facts}>
            {factsContent.map((item, i) => {
              return (
                <div key={item.key} className={s.info_fact}>
                  <SvgSelector id="question" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Button size="small">
            <SvgSelector id="map" />
          </Button>
        </div>
      </CardLayout>
    </div>
  );
}
