import React from "react";

import { Button } from "../../shared/components/button";

import SvgSelector from "../current-country-media/svg-selector";
import s from "./map.module.scss";

type Props = {
  previewUrl: string;
  long: string;
  lat: string;
  url: string;
};

export function MapElement({ url, previewUrl, long, lat }: Props) {
  return (
    <div className={s.map}>
      <p className={s.map_cords}>{`${long} ${lat}`}</p>

      <img src={previewUrl} alt={long} />

      <a href={url}>
        <Button
          size="small"
          styles={{ position: "absolute", right: "30px", bottom: "-25px" }}
        >
          <SvgSelector id="map" />
        </Button>
      </a>
    </div>
  );
}
