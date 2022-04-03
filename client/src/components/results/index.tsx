import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import { Dropdown } from "../../shared/components/dropdown";
import { FilterRange } from "../../shared/components/range";
import { filterParams } from "../../shared/constants/searchFilters";
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

const ii = [
  {
    name: "Canada",
    totalSize: 9984670,
    population: 5468436447,
  },
  {
    name: "China",
    totalSize: 9984670,
    population: 345436447,
  },
  {
    name: "United States",
    totalSize: 9984670,
    population: 679436447,
  },
  {
    name: "Brazil",
    totalSize: 9984670,
    population: 15436447,
  },
  {
    name: "Australia",
    totalSize: 9984670,
    population: 122436447,
  },
  {
    name: "India",
    totalSize: 9984670,
    population: 89736447,
  },
  {
    name: "Argentina",
    totalSize: 9984670,
    population: 436447,
  },
  {
    name: "Algeria",
    totalSize: 9984670,
    population: 384447,
  },
  {
    name: "Kazakhstan",
    totalSize: 9984670,
    population: 38436,
  },
];

export function Results(props: Props) {
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
          {ii.map((item) => {
            return (
              <tr>
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
