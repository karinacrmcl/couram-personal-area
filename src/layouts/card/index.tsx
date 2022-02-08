import React, { CSSProperties, ReactNode } from "react";
import s from "./card.module.scss";

type Props = {
  type: "large" | "middle" | "small";
  children: ReactNode;
  styles?: CSSProperties;
  bgUrl?: string;
};

export function CardLayout({ children, type, styles = {}, bgUrl }: Props) {
  return (
    <div style={{ ...styles }} className={s[`card_${type}`]}>
      {bgUrl ? <img src={bgUrl} /> : null}
      {children}
    </div>
  );
}
