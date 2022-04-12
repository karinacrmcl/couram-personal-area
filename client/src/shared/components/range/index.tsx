import React, { useState } from "react";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  minValue: number;
  maxValue: number;
  step: number;
  defValues: number[];
  setNewValues: (items: number[]) => void;
};

export function FilterRange({
  minValue,
  maxValue,
  step,
  defValues,
  setNewValues,
}: Props) {
  const STEP = step;
  const MIN = minValue;
  const MAX = maxValue;
  const [values, setValues] = useState(defValues);

  const handleStyle = {
    backgroundColor: "#222222",
    opacity: 1,
    width: 15,
    height: 15,
    border: "2px solid white",
    top: 4,
  };

  const trackStyle = {
    backgroundColor: "#222222",
  };

  return (
    <div>
      <Range
        range={true}
        min={MIN}
        max={MAX}
        step={STEP}
        defaultValue={[MIN, MAX]}
        onChange={(e: number[] | number) => {
          if (!Array.isArray(e)) return;
          setNewValues(e);
          setValues(e);
        }}
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        dots={false}
      />
    </div>
  );
}
