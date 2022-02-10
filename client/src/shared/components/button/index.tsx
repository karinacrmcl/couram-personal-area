import classNames from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import s from "./button.module.scss";

type Props = {
  size: "small" | "large";
  children?: ReactNode;
  styles?: CSSProperties;
  onClick?: () => void;
};

export function Button({ children, size, styles, onClick }: Props) {
  return (
    <button
      style={{ ...styles }}
      className={classNames(s[`button_${size}`], s.button)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
