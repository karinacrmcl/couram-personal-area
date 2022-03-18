import classNames from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import { useExtendedInfoContext } from "../../context/extended-info";
import s from "./card.module.scss";

type Props = {
  type: "large" | "middle" | "small";
  children: ReactNode;
  styles?: CSSProperties;
  bgUrl?: string;
};

export function CardLayout({ children, type, styles = {}, bgUrl }: Props) {
  const { isExtendedOpen } = useExtendedInfoContext();

  return (
    <div
      style={isExtendedOpen ? {} : { ...styles }}
      className={classNames(s[`card_${type}`], {
        [s.card_opened]: isExtendedOpen,
      })}
    >
      {bgUrl ? <img src={bgUrl} /> : null}
      {children}
    </div>
  );
}
