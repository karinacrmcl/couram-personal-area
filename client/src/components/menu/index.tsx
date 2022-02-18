import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../shared/components/button";
import s from "./menu.module.scss";
import { Transition } from "react-transition-group";
import GlobalSelector from "../../shared/icons/svg-selector";
import { useMediaQuery } from "react-responsive";

type Props = {};

export function Menu(props: Props) {
  const isMobile = useMediaQuery({ maxWidth: "850px" });
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  const menuTabs = [
    { name: "Home", link: "/" },
    { name: "Explore more", link: "/explore-more" },
    { name: "Favourites", link: "/favourites" },
    { name: "All countries", link: "/all-countries" },
  ];

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [id: string]: React.CSSProperties } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className={s.navigation}>
      <Transition in={isOpen} timeout={duration}>
        {(state) => (
          <nav
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {menuTabs.map((item, i) => {
              return (
                <Link to={item.link} key={i}>
                  <p className={s.navigation_link}>{item.name}</p>
                </Link>
              );
            })}
          </nav>
        )}
      </Transition>

      <Button
        size="small"
        styles={{
          position: "fixed",
          right: "10px",
          width: "55px",
          height: "55px",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobalSelector id={isOpen ? "menu" : "close"} />
      </Button>
    </div>
  );
}
