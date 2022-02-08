import React from "react";
import { Menu } from "../../components/menu";
import { Logo } from "../../shared/components/logo";
import s from "./header.module.scss";

export default function HeaderContainer() {
  return (
    <header className={s.header}>
      <Logo />
      <Menu />
    </header>
  );
}
