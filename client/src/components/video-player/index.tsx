import React, { useState } from "react";
import { useModalContext } from "../../context/modal";

import ReactPlayer from "react-player";

import GlobalSelector from "../../shared/icons/svg-selector";
import s from "./video-player.module.scss";

type Props = {
  url: string;
};

export function VideoPlayer({ url }: Props) {
  const { setContent } = useModalContext();

  return (
    <div className={s.videoplayer}>
      <button
        className={s.videoplayer_closebutton}
        onClick={() => setContent(null)}
      >
        <GlobalSelector id="back" />
      </button>
      <ReactPlayer
        url={url}
        controls={false}
        volume={0.2}
        playing={true}
        width={"70%"}
        height={"700px"}
        style={{ zIndex: "1", pointerEvents: "none" }}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              modestbranding: 1,
              rel: 0,
              fs: 0,
              loop: 1,
              disablekb: 0,
            },
          },
        }}
      />
    </div>
  );
}
