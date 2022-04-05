import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import { useCountries } from "../../hooks/useCountries";
import { Dropdown } from "../../shared/components/dropdown";
import { FilterRange } from "../../shared/components/range";
import { filterParams } from "../../shared/constants/searchFilters";
import { CountryBasicInfo } from "../../types/country";
import { numberWithCommas } from "../../utils/splitNumber";
import s from "./results.module.scss";

type Props = {};

type FilterOptions = {
  item: {
    minValue: number;
    maxValue: number;
    startValue: number;
    endValue: number;
    step: number;
    unit: string;
    icon: string;
  };
};

function SelectFilters({ item }: FilterOptions) {
  const [values, setValues] = useState([item.startValue, item.endValue]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleSetValues(items: number[]) {
    setValues(items);
  }

  function handleOpen() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <Dropdown
      preview={values}
      isOpen={isDropdownOpen}
      handleOpen={handleOpen}
      unit={item.unit}
      icon={item.icon}
    >
      <FilterRange
        minValue={item.minValue}
        maxValue={item.maxValue}
        defValues={values}
        setNewValues={handleSetValues}
        step={item.step}
      />
    </Dropdown>
  );
}

export function Results(props: Props) {
  const countryList = useCountries();
  const previewList = countryList?.data?.slice(0, 10);

  return (
    <div className={s.results}>
      <div className={s.results_top}>
        <h3>Results</h3>
        <div className={s.results_params}>
          {filterParams.map((item) => {
            return <SelectFilters item={item} key={item.id} />;
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
