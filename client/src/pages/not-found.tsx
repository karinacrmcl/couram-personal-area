import React from "react";
import { ErrorMessage } from "../components/error-message";
import NotFoundContainer from "../containers/404";
import CurrentCountryProvider from "../provider/current-country";

export default function NotFound() {
  return (
    <CurrentCountryProvider>
      <NotFoundContainer />
    </CurrentCountryProvider>
  );
}
