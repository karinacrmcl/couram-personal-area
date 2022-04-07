import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import { useSearchContext } from "../../context/search";
import { useCountries } from "../../hooks/useCountries";
import { Dropdown } from "../../shared/components/dropdown";
import { FilterRange } from "../../shared/components/range";
import { filterParams } from "../../shared/constants/searchFilters";
import { CountryBasicInfo } from "../../types/country";
import { numberWithCommas } from "../../utils/splitNumber";
import s from "./results.module.scss";
import { FilterItem, SelectFilters } from "./select-filters";

type Props = {};

export function Results(props: Props) {
  const countryList = useCountries();
  const previewList = countryList?.data?.slice(0, 10);

  const { searchTerm, setSearchTerm } = useSearchContext();

  function updateSearch(values: number[]) {
    setSearchTerm({ ...searchTerm, area: values });
  }

  console.log(searchTerm);

  return (
    <div className={s.results}>
      <div className={s.results_top}>
        <h3>Results</h3>
        <div className={s.results_params}>
          {filterParams.map((item: FilterItem) => {
            return (
              <SelectFilters
                item={item}
                key={item.id}
                onUpdate={(values) => updateSearch(values)}
              />
            );
          })}
        </div>
      </div>
      <table className={s.results_table}>
        <thead>
          <th>Name</th>
          <th>Total size</th>
          <th>Population</th>
        </thead>
        <tbody>
          {previewList?.map((item: CountryBasicInfo) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  {numberWithCommas(item.totalSize)}
                  <span>km²</span>
                </td>
                <td>{numberWithCommas(item.population)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
function values(item: FilterItem, values: any) {
  throw new Error("Function not implemented.");
}
