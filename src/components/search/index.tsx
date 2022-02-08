import React, { useState } from "react";
import { CardLayout } from "../../layouts/card";
import { Button } from "../../shared/components/button";
import { Select } from "../../shared/components/select";
import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./search.module.scss";

type Props = {};

export function Search(props: Props) {
  const [value, setValue] = useState("");
  const items = [
    { value: "Barbados, Bridgetown" },
    { value: "Belarus, Minsk " },
    { value: "Belgium, Brussels " },
    { value: "Belize, Belmopan" },
    { value: "Benin, Porto Novo" },
    { value: "Bhutan, Thimphu " },
    { value: "Bolivia, La Paz" },
  ];

  return (
    <div className={s.search}>
      <CardLayout
        type="large"
        bgUrl="/images/search-bg.jpg"
        styles={{ width: "100%", height: "250px" }}
      >
        <div className={s.search_content}>
          <h2>Looking for something specific?</h2>
          <h5>Enter a name below or specify options to get search results</h5>
        </div>
        <div className={s.search_shadow} />
      </CardLayout>
      <div className={s.search_bar}>
        <GlobalSelector id="search" />
        <input
          className={s.search_input}
          value={value}
          placeholder="What are you looking for?"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <hr />
        <GlobalSelector id="location" />
        <Select defaultValue={{ value: "San Francisco, USA" }} items={items} />
        <Button
          size="small"
          styles={{ padding: "10px 25px", width: "auto", height: "50px" }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}