import React, { ReactChild, ReactNode } from "react";
import s from "./section.module.scss";

type Props = {
  title: string;
  children: ReactNode;
};

export function SectionLayout({ children, title }: Props) {
  return (
    <div className={s.section}>
      <h2 className={s.section_title}>{title}</h2>
      <div className={s.section_content}>{children}</div>
    </div>
  );
}
