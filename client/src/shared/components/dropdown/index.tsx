import classNames from "classnames";
import s from "./dropdown.module.scss";
import React, { ReactNode } from "react";
import GlobalSelector from "../../icons/svg-selector";

type DropdownProps = {
  children: ReactNode;
  preview: number[];
  unit: string;
  isOpen: boolean;
  handleOpen: () => void;
  icon: string;
};

export function Dropdown({
  children,
  preview,
  isOpen,
  handleOpen,
  unit,
  icon,
}: DropdownProps) {
  return (
    <div
      className={classNames(s.dropdown, {
        [s.dropdown_active__open]: isOpen,
      })}
    >
      <div
        className={classNames(s.dropdown_active, {
          [s.dropdown_active__open]: isOpen,
        })}
      >
        <div className={s.dropdown_active__top}>
          <div className={s.dropdown_active__value}>
            <GlobalSelector id={icon} />
            <p>{`${preview[0]} - ${preview[1]} ${unit}`}</p>
          </div>
          <button
            className={s.dropdown_active__expand}
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
            onClick={handleOpen}
          >
            <GlobalSelector id="arrow-down" />
          </button>
        </div>

        <div
          className={classNames(s.dropdown_content, {
            [s.dropdown_content__open]: isOpen,
          })}
        >
          <div className={s.dropdown_content__values}>
            <p>{preview[0]}</p>
            <p>{preview[1]}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
