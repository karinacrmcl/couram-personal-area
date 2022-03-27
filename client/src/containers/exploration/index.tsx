import React from "react";
import { CountryStats } from "../../components/country-stats";
import { Gallery } from "../../components/gallery";
import { MapElement } from "../../components/map";
import { TextContent } from "../../components/text-content";
import { useExtendedInfoContext } from "../../context/extended-info";
import { useCountry } from "../../hooks/useCountry";
import { Button } from "../../shared/components/button";
import s from "./exploration.module.scss";
type Props = {};

export function ExplorationContainer({}: Props) {
  const { id } = useExtendedInfoContext();
  const response = useCountry(id);
  const country = response?.data?.[0];

  return (
    <div className={s.exploration}>
      <div className={s.exploration_divided}>
        <CountryStats country={response} />
        <TextContent title="Overview" body={country?.content?.overview?.body} />
      </div>
      <Gallery photos={country?.content?.gallery} />
      <TextContent
        title="Brief History"
        body={country?.content?.history?.body}
      />
      <div className={s.exploration_divided}>
        <TextContent
          title="Geography"
          body={country?.content?.geography?.body}
        />
        <MapElement
          long={country?.coordinates?.long}
          lat={country?.coordinates?.lat}
          previewUrl={country?.content?.geography?.mapsPreview}
          url={country?.content?.geography?.mapsUrl}
        />
      </div>
      <TextContent title="Economy" body={country?.content?.economy?.body} />
    </div>
  );
}
