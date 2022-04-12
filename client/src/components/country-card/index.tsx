import classNames from "classnames";
import React, { useState } from "react";

import { CardLayout } from "../../layouts/card";
import { Button } from "../../shared/components/button";
import { Favourite } from "../../shared/components/favourite";

import { CountryBasicInfo } from "../../types/country";
import { checkStoredIds, storeId } from "../../utils/local-storage";

import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./country-card.module.scss";

type Props = {
  item: CountryBasicInfo;
};

export function CountryCard({ item }: Props) {
  const [isExpanded, setisExpanded] = useState(false);

  return (
    <CardLayout
      bgUrl={item.coverPhoto.largeUrl}
      styles={{
        width: isExpanded ? "850px" : "400px",
        height: "500px",
        padding: "0px",
        justifyContent: "flex-end",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.19)",
        borderRadius: "30px",
      }}
      type="middle"
    >
      <div className={s.countrycard_shadow}></div>
      <div
        className={classNames(s.countrycard, {
          [s.countrycard_expanded]: isExpanded,
        })}
      >
        <Favourite
          onClick={() => storeId(item?.id)}
          active={checkStoredIds(item.id)}
        />
        <div
          className={classNames(s.countrycard_content, {
            [s.countrycard_content_expanded]: isExpanded,
          })}
        >
          <h3>{item.name}</h3>
          {isExpanded && <br />}
          <p>Capital: {item.capital}</p>

          <div
            className={classNames(s.countrycard_content_body, {
              [s.countrycard_content_body_hidden]: !isExpanded,
            })}
          >
            <p>Language: {item.languages[0]}</p>
            <p>Currency: {item.currencies[0]}</p>
            <br />
            <p>{item.shortDescription}</p>
          </div>

          <Button
            size="small"
            styles={{
              right: "5%",
              bottom: "10%",
              float: "right",
              position: "absolute",
              transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
            }}
            onClick={() => {
              setisExpanded(!isExpanded);
            }}
          >
            <GlobalSelector id="plus" />
          </Button>
        </div>
      </div>
    </CardLayout>
  );
  {
  }
}
