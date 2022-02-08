import React from "react";
import { RangeOK } from "../../shared/components/range";
import s from "./results.module.scss";

type Props = {};

export function Results(props: Props) {
  return (
    <div className={s.results}>
      <div className={s.results_top}>
        <h3>Results</h3>
        <div className={s.results_params}>
          <RangeOK />
        </div>
      </div>
    </div>
  );
}
