import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../shared/components/button";
import s from "./menu.module.scss";
import GlobalSelector from "../../shared/icons/svg-selector";

type Props = {};

export function Menu(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const menuTabs = [
    { name: "Home", link: "/" },
    { name: "Explore more", link: "/explore-more" },
    { name: "Favourites", link: "/favourites" },
    { name: "All countries", link: "/all-countries" },
  ];

  return (
    <div className={s.navigation}>
      <nav>
        {menuTabs.map((item, i) => {
          return (
            <Link to={item.link} key={i}>
              <p className={s.navigation_link}>{item.name}</p>
            </Link>
          );
        })}
      </nav>
      <Button
        size="small"
        styles={{ position: "absolute", right: 0 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobalSelector id={isOpen ? "menu" : "close"} />
      </Button>
    </div>
  );
}
