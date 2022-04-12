import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../context/search";
import { useCountries } from "../../hooks/useCountries";
import { filterParams } from "../../shared/constants/search-filters";
import GlobalSelector from "../../shared/icons/svg-selector";
import { CountryBasicInfo } from "../../types/country";
import { inRange } from "../../utils/in-range";
import { numberWithCommas } from "../../utils/split-number";
import s from "./results.module.scss";
import { FilterItem, SelectFilters } from "./select-filters";

type Props = {};

export function Results(props: Props) {
  const countryList = useCountries();
  const [currentArray, setCurrentArray] = useState([]);
  const { searchTerm, setSearchTerm } = useSearchContext();

  function updateSearch(key: string, values: number[]) {
    setSearchTerm({
      ...searchTerm,
      [key]: values,
    });
  }

  function checkName(name: string | null, searchTerm: string | null) {
    if (searchTerm != null) {
      if (/^\s*$/.test(searchTerm)) return true;
    } else {
      return true;
    }
    if (searchTerm && name !== null) {
      return name.toLocaleLowerCase() === searchTerm.toLocaleLowerCase();
    } else {
      return true;
    }
  }

  useEffect(() => {
    setCurrentArray(countryList?.data?.slice(0, 10));
  }, [countryList]);

  useEffect(() => {
    function updateResults() {
      console.log(countryList);
      const newArr = countryList?.data?.filter((country: CountryBasicInfo) => {
        return (
          inRange(country.population, searchTerm.population) &&
          inRange(country.totalSize, searchTerm.area) &&
          checkName(country.name, searchTerm?.name)
        );
      });
      setCurrentArray(newArr);
    }
    updateResults();
  }, [searchTerm]);

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
                onUpdate={(key, values) => updateSearch(key, values)}
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
          {currentArray?.length === 0 ? (
            <p>Nothing found</p>
          ) : !currentArray ? (
            <GlobalSelector id="loader" />
          ) : (
            currentArray.map((item: CountryBasicInfo) => {
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
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
