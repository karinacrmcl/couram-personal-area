import React from "react";
import s from "./select.module.scss";

type Props = {
  defaultValue: {
    value: string;
  };
  items: { value: string }[];
};

export function Select({ defaultValue, items }: Props) {
  return (
    <div className={s.select}>
      <div className={s.select_active}>{defaultValue.value}</div>
      <div className={s.select_list}>
        {items.map((item, i) => {
          return (
            <div key={i} className={s.select_item}>
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
