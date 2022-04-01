import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { FilterRange } from "../../shared/components/range";
import { TransitionWrapper } from "../../shared/components/transition";
import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./results.module.scss";

type DropdownProps = {
  children: ReactNode;
  preview: number[];
  unit: string;
};

type ContentProps = {
  // setData: (data: any) => void;
  children: ReactNode;
};

type Props = {};

function Dropdown({ children, preview, unit }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  // const [selectedItemId, setSelectedItemId] = useState(defaultSelected.key);

  return (
    <div
      className={classNames(s.dropdown, {
        [s.dropdown_active__open]: isOpen,
      })}
    >
      <button
        className={classNames(s.dropdown_active, {
          [s.dropdown_active__open]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={s.dropdown_active__top}>
          <div className={s.dropdown_active__value}>
            {`${preview[0]} - ${preview[1]} ${unit}`}
          </div>
          <div
            className={s.dropdown_active__expand}
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          >
            <GlobalSelector id="arrow-down" />
          </div>
        </div>

        <div
          className={classNames(s.dropdown_content, {
            [s.dropdown_content__open]: isOpen,
          })}
        >
          {children}
        </div>
      </button>
    </div>
  );
}

type FilterOptions = {
  item: {
    minValue: number;
    maxValue: number;
    startValue: number;
    endValue: number;
    step: number;
    unit: string;
  };
};

function SelectFilters({ item }: FilterOptions) {
  const [values, setValues] = useState([item.startValue, item.endValue]);

  function handleSetValues(items: number[]) {
    setValues(items);
  }

  return (
    <Dropdown preview={values} unit={item.unit}>
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

const filterParams = [
  {
    minValue: 1000,
    maxValue: 10000000000,
    startValue: 100000,
    endValue: 300000,
    step: 1000,
    unit: "km²",
  },
  {
    minValue: 1,
    maxValue: 1000,
    startValue: 10,
    endValue: 200,
    step: 1,
    unit: "million",
  },
];

export function Results(props: Props) {
  return (
    <div className={s.results}>
      <div className={s.results_top}>
        <h3>Results</h3>
        <div className={s.results_params}>
          {filterParams.map((item) => {
            return <SelectFilters item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
