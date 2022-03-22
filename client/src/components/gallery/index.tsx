import React, { useRef } from "react";
import s from "./gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import GlobalSelector from "../../shared/icons/svg-selector";
SwiperCore.use([Navigation, Pagination, Autoplay]);

type Photo = {
  url: string;
  location: string;
};

type Props = {
  photos: Photo[];
};

function GalleryItem({ photo }: { photo: { url: string; location: string } }) {
  return (
    <div className={s.gallery_item}>
      <span className={s.gallery_shadow} />
      <img src={photo?.url} alt={photo?.location} />
      <p>
        <GlobalSelector id="location" />
        {photo?.location}
      </p>
    </div>
  );
}

export function Gallery({ photos }: Props) {
  const swiperRef = React.useRef(null);

  return (
    <div className={s.gallery}>
      <h2 className={s.gallery_title}>Gallery</h2>
      <div className={s.gallery_content}>
        <Swiper
          pagination={{
            type: "bullets",
          }}
          autoplay={{
            delay: 20000,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          // @ts-ignore
          ref={swiperRef}
        >
          {photos?.map((photo: Photo, i: React.Key | null | undefined) => {
            return (
              <SwiperSlide key={i}>
                <GalleryItem photo={photo} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className={s.gallery_swiper_prev}
          // @ts-ignore
          onClick={() => swiperRef.current.swiper.slidePrev()}
        ></div>
        <div
          className={s.gallery_swiper_next}
          // @ts-ignore
          onClick={() => swiperRef.current.swiper.slideNext()}
        ></div>
      </div>
    </div>
  );
}
