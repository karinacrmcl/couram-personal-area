import React from "react";
import { useLocation } from "react-router";
import { Menu } from "../../components/menu";
import { Logo } from "../../shared/components/logo";
import { checkPath } from "../../utils/check-path";
import classNames from "classnames";
import s from "./header.module.scss";

export default function HeaderContainer() {
  const isWhite = checkPath(useLocation().pathname);
  console.log(isWhite);

  return (
    <header className={classNames(s.header, { [s.header_white]: !isWhite })}>
      <Logo />
      <Menu />
    </header>
  );
}
