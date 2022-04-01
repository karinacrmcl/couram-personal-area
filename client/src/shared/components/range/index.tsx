import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
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

  return (
    <div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setNewValues(values);
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "4px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#D3D3D3", " #575757", "#D3D3D3"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "15px",
              width: "15px",
              borderRadius: "100px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              outline: "none",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#ffffff" : "#ffffff",
              }}
            />
          </div>
        )}
      />
    </div>
  );
}
