import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

import MenuIconSvg from "./SvgIcons/Menu";
import styles from "./styles.module.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className={styles.menuButton} onClick={() => setIsOpen(true)}>
        <MenuIconSvg />
      </div>
      <div
        className={clsx(styles.sidebar, { [styles.active]: isOpen })}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={styles.menuSideBar}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.imgBox}>
            <img src={useBaseUrl("img/eoscr-logo.png")} alt="EOS CR LOGO" />
          </div>
          <ul>
            <li>
              <a href={useBaseUrl("/")}>Home</a>
            </li>
            <li>
              <a href={useBaseUrl("/services")}>Services</a>
            </li>
            <li>
              <a href={useBaseUrl("/about")}>About</a>
            </li>
            <li>
              <a href={useBaseUrl("/bp")}>Bp</a>
            </li>
            <li>
              <a href={useBaseUrl("/blog")}>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const NavbarMenu = () => {
  const logo = useRef(0);
  const content = useRef(0);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
  const { matches } = window.matchMedia("(max-width: 768px)");

    if (matches) return

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      const transformValue = `scale(0.4, 0.4)`;

      logo.current.style.WebkitTransform = transformValue;
      logo.current.style.MozTransform = transformValue;
      logo.current.style.OTransform = transformValue;
      logo.current.style.transform = transformValue;

      content.current.style.height = "75px";
    } else {
      const transformValue = `scale(1, 1)`;

      logo.current.style.WebkitTransform = transformValue;
      logo.current.style.MozTransform = transformValue;
      logo.current.style.OTransform = transformValue;
      logo.current.style.transform = transformValue;

      content.current.style.height = "150px";
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const transformValue = `scale(1, 1)`;

      logo.current.style.WebkitTransform = transformValue;
      logo.current.style.MozTransform = transformValue;
      logo.current.style.OTransform = transformValue;
      logo.current.style.transform = transformValue;

      content.current.style.height = "60px";

      return;
    }

    if (!isMobile && pathname !== '/') {
      const transformValue = `scale(0.4, 0.4)`;

      logo.current.style.WebkitTransform = transformValue;
      logo.current.style.MozTransform = transformValue;
      logo.current.style.OTransform = transformValue;
      logo.current.style.transform = transformValue;

      content.current.style.height = "65px";

      return;
    }

    handleScroll()
  }, [isMobile, pathname]);

  return (
    <div className={styles.customMenu} ref={content}>
      {isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={styles.boxLeft}>
        <img
          ref={logo}
          src={useBaseUrl("img/eoscr-logo.png")}
          alt="EOS CR LOGO"
        />
      </div>
      <div className={styles.boxRight}>
        <ul>
          <li>
            <a
              href={useBaseUrl("/")}
              className={clsx({ [styles.selected]: pathname === "/" })}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/services")}
              className={clsx({
                [styles.selected]: pathname.includes("/services"),
              })}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/about")}
              className={clsx({
                [styles.selected]: pathname.includes("/about"),
              })}
            >
              About
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/bp")}
              className={clsx({
                [styles.selected]: pathname.includes("/bp"),
              })}
            >
              BP
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/blog")}
              className={clsx({
                [styles.selected]: pathname.includes("/blog"),
              })}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
