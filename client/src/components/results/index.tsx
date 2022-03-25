import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { FilterRange } from "../../shared/components/range";
import { TransitionWrapper } from "../../shared/components/transition";
import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./results.module.scss";

type DropdownProps = {
  children: ReactNode;
};

type ContentProps = {
  // setData: (data: any) => void;
  children: ReactNode;
};

type Props = {};

function DropdownContent({ children }: ContentProps) {
  return <div>{children}</div>;
}

function Dropdown({ children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  // const [selectedItemId, setSelectedItemId] = useState(defaultSelected.key);

  const dataSetHandler = (data: any) => {
    setData(data);
  };

  return (
    <div className={s.dropdown}>
      <button
        className={classNames(s.dropdown_active, {
          [s.dropdown_active__open]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={s.dropdown_active__value}>{data}</div>
        <div
          className={s.dropdown_active__expand}
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
        >
          <GlobalSelector id="arrow-down" />
        </div>
      </button>
      <TransitionWrapper state={isOpen}>
        <DropdownContent>{children}</DropdownContent>
      </TransitionWrapper>
    </div>
  );
}

export function Results(props: Props) {
  return (
    <div className={s.results}>
      <div className={s.results_top}>
        <h3>Results</h3>
        <div className={s.results_params}>
          <Dropdown>
            <FilterRange
              minValue={1000}
              maxValue={10000000000}
              startValue={100000}
              endValue={300000}
              step={1000}
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
