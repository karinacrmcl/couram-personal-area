import React from "react";

import { FavouriteItem } from "../../components/favourite";
import { SectionLayout } from "../../layouts/section";

import { useFavourites } from "../../hooks/useFavourites";
import { getStoredIds } from "../../utils/local-storage";

import s from "./favourites.module.scss";
import GlobalSelector from "../../shared/icons/svg-selector";

export function FavouritesContainer() {
  const ids = getStoredIds();
  const favourites = useFavourites(ids);

  return (
    <SectionLayout title="Your Favourites">
      <div className={s.favourites}>
        {favourites.length > 0 ? (
          favourites.map((item) => {
            console.log(item);
            return <FavouriteItem item={item} />;
          })
        ) : (
          <div className={s.favourites_empty}>
            <GlobalSelector id="empty" />
            <h3>You don't have any favourites yet</h3>
          </div>
        )}
      </div>
    </SectionLayout>
  );
}
