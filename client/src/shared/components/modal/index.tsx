import React, { ReactNode } from "react";
import s from "./modal.module.scss";

type Props = {
  children: ReactNode;
};

export const ModalBackground = ({ children }: Props) => {
  return <div className={s.modal_background}>{children}</div>;
};
