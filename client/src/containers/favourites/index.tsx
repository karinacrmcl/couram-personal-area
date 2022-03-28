import React from "react";
import { FavouriteItem } from "../../components/favourite";
import { useFavourites } from "../../hooks/useFavourites";
import { SectionLayout } from "../../layouts/section";
import { getStoredIds } from "../../utils/local-storage";
import s from "./favourites.module.scss";
type Props = {};

export function FavouritesContainer(props: Props) {
  const ids = getStoredIds();
  const favourites = useFavourites(ids);

  return (
    <SectionLayout title="Your Favourites">
      <div className={s.favourites}>
        {favourites.map((item) => {
          console.log(item);
          return <FavouriteItem item={item} />;
        })}
      </div>
    </SectionLayout>
  );
}
