import React from "react";
import s from "./text-content.module.scss";

type Props = {
  title: string;
  body: string;
};
export function TextContent({ title, body }: Props) {
  const formattedBody = body?.split("/br");

  return (
    <div className={s.textcontent}>
      <h2>{title}</h2>
      <div className={s.textcontent_body}>
        {formattedBody?.map((item: string, i: number | string | undefined) => (
          <p key={i} className={s.textcontent_item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
