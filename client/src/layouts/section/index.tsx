import React, { ReactChild, ReactNode } from "react";
import { useExtendedInfoContext } from "../../context/extended-info";
import { TransitionWrapper } from "../../shared/components/transition";
import s from "./section.module.scss";

type Props = {
  title: string;
  children: ReactNode;
};

export function SectionLayout({ children, title }: Props) {
  const { isExtendedOpen } = useExtendedInfoContext();

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0, height: 0 },
    exited: { opacity: 0, zIndex: -100, height: 0 },
  };

  return (
    <div className={s.section}>
      <TransitionWrapper
        state={isExtendedOpen}
        styles={{ height: "120px" }}
        transitionStyles={transitionStyles}
        duration={600}
      >
        <h2 className={s.section_title}>{title}</h2>
      </TransitionWrapper>

      <div className={s.section_content}>{children}</div>
    </div>
  );
}
