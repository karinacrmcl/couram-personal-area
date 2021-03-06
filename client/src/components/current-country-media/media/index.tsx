import React, { useState } from "react";
import { CardLayout } from "../../../layouts/card";
import { Button } from "../../../shared/components/button";
import GlobalSelector from "../../../shared/icons/svg-selector";
import { CountryBasicInfo } from "../../../types/country";
import s from "./media.module.scss";
import ReactPlayer from "react-player";
import { formatDuration } from "../../../utils/format-duration";
import { useModalContext } from "../../../context/modal";
import { VideoPlayer } from "../../video-player";
import { useExtendedInfoContext } from "../../../context/extended-info";

type Props = {
  country: CountryBasicInfo;
};

export function Media({ country }: Props) {
  const [duration, setDuration] = useState("");
  const { setContent } = useModalContext();
  const { isExtendedOpen } = useExtendedInfoContext();

  return (
    <div className={s.media}>
      <CardLayout
        type="small"
        styles={{ width: "401px", height: "460px" }}
        resize={{ state: isExtendedOpen, styles: { height: 0, width: 0 } }}
      >
        <div className={s.media_content}>
          <h3>{country?.content?.video?.title}</h3>
          <div className={s.media_location}>
            <GlobalSelector id="location" />
            <p>{country?.content?.video?.location}</p>
          </div>
          <div className={s.media_duration}>
            <hr />
            <p>{duration || "0:00"}</p>
          </div>
        </div>
        <div className={s.media_shadow}></div>
        <div className={s.media_preview}>
          <img
            src={country?.content?.video?.previewUrl}
            alt={country?.content?.video?.title}
          />
        </div>
        <ReactPlayer
          url={country?.content?.video?.url}
          onDuration={(dur) => setDuration(formatDuration(dur))}
        />
      </CardLayout>
      <Button
        size="large"
        styles={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "-35px",
        }}
        onClick={() =>
          setContent(<VideoPlayer url={country?.content?.video?.url} />)
        }
      >
        <GlobalSelector id="play" />
      </Button>
    </div>
  );
}
