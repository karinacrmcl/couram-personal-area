import React, { useState } from "react";
import { CardLayout } from "../../layouts/card";
import { Button } from "../../shared/components/button";
import { Select } from "../../shared/components/select";
import GlobalSelector from "../../shared/icons/svg-selector";
import { useMediaQuery } from "react-responsive";
import s from "./search.module.scss";
import { useCurrentCountryContext } from "../../context/current-country";
import { useSearchContext } from "../../context/search";

type Props = {
  bgUrl: string;
};

export function Search({ bgUrl }: Props) {
  const [value, setValue] = useState("");
  const { searchTerm, setSearchTerm } = useSearchContext();

  const isMobileXS = useMediaQuery({ maxWidth: "600px" });

  return (
    <div className={s.search}>
      <CardLayout
        type="large"
        bgUrl={bgUrl}
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
        {/* {!isMobile && (
          <>
            <GlobalSelector id="location" />
            <Select
              defaultValue={{ value: "San Francisco, USA" }}
              items={items}
            />
          </>
        )} */}
        {!isMobileXS && (
          <Button
            size="small"
            styles={{
              padding: "10px 25px",
              maxWidth: "auto",
              width: "auto",
              minWidth: "100px",
              height: "50px",
              maxHeight: "50px",
              minHeight: "50px",
            }}
            onClick={() => setSearchTerm({ ...searchTerm, name: value })}
          >
            Search
          </Button>
        )}
      </div>
    </div>
  );
}
