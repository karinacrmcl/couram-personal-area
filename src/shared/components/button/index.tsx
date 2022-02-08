import classNames from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import s from "./button.module.scss";

type Props = {
  size: "small" | "large";
  children?: ReactNode;
  styles?: CSSProperties;
};

export function Button({ children, size, styles }: Props) {
  return (
    <button
      style={{ ...styles }}
      className={classNames(s[`button_${size}`], s.button)}
    >
      {children}
    </button>
  );
}
