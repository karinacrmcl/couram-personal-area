import React from "react";
import { useFavourites } from "../../hooks/useFavourites";
import { getFavourites } from "../../utils/get-favourites";

type Props = {};

export function FavouritesContainer(props: Props) {
  const yes = useFavourites([1, 2]);
  console.log(yes);
  return <div>FavouritesContainer</div>;
}
