import React from "react";
import { ErrorMessage } from "../../components/error-message";
import { Menu } from "../../components/menu";
import { useCurrentCountryContext } from "../../context/current-country";
import CurrentCountryProvider from "../../provider/current-country";
import { Logo } from "../../shared/components/logo";
import HeaderContainer from "../header";
import s from "./404.module.scss";

export default function NotFoundContainer() {
  const context = useCurrentCountryContext();

  return (
    <div
      className={s.notfound}
      style={{
        backgroundImage: `url(${context?.country?.coverPhoto?.largeUrl})`,
      }}
    >
      <ErrorMessage />
    </div>
  );
}
