import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import s from "./card.module.scss";

type Props = {
  type: "large" | "middle" | "small";
  children: ReactNode;
  bgUrl?: string;
  styles?: CSSProperties;
  resize?: {
    state: boolean;
    styles: CSSProperties;
  };
};

export function CardLayout({ children, styles, type, bgUrl, resize }: Props) {
  return (
    <div
      style={resize?.state ? { ...styles, ...resize?.styles } : { ...styles }}
      className={classNames(s[`card_${type}`], {
        [s.card_opened]: resize?.state,
      })}
    >
      {bgUrl ? <img src={bgUrl} /> : null}
      {children}
    </div>
  );
}
