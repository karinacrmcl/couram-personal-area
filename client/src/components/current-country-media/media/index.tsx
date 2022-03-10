import React from "react";
import { CardLayout } from "../../../layouts/card";
import { Button } from "../../../shared/components/button";
import GlobalSelector from "../../../shared/icons/svg-selector";
import { CountryBasicInfo } from "../../../types/country";
import s from "./media.module.scss";

type Props = {
  country: CountryBasicInfo;
};

export function Media({ country }: Props) {
  return (
    <div className={s.media}>
      <CardLayout
        type="small"
        bgUrl="/images/example-bg-2.jpg"
        styles={{ width: "401px", height: "460px" }}
      >
        <div className={s.media_content}>
          <h3>Mountains seen from the vineyard</h3>
          <div className={s.media_location}>
            <GlobalSelector id="location" />
            <p>Vaduz, Liechtenstein</p>
          </div>
          <div className={s.media_duration}>
            <hr />
            <p>5:00</p>
          </div>
        </div>

        <div className={s.media_shadow}></div>
      </CardLayout>
      <Button
        size="large"
        styles={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "-35px",
        }}
      >
        <GlobalSelector id="play" />
      </Button>
    </div>
  );
}
