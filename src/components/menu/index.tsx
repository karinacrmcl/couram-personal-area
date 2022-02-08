import React from "react";
import { Link } from "react-router-dom";
import s from "./menu.module.scss";

type Props = {};

export function Menu(props: Props) {
  const menuTabs = [
    { name: "Home", link: "/" },
    { name: "Explore more", link: "/explore-more" },
    { name: "Favourites", link: "" },
    { name: "All countries", link: "" },
  ];

  return (
    <nav className={s.navigation}>
      {menuTabs.map((item, i) => {
        return (
          <Link to={item.link} key={i}>
            <p className={s.navigation_link}>{item.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
