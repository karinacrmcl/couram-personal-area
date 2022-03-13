import React from "react";
import s from "./error-message.module.scss";

type Props = {};

export function ErrorMessage({}: Props) {
  return (
    <div className={s.error_message}>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>Sorry, we were unable to find that page</p>
    </div>
  );
}
