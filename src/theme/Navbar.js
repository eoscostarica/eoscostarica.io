import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

import MenuIconSvg from "./SvgIcons/Menu";
import styles from "./styles.module.css";

const PATHS = [
  {
    strokeDasharray: "47 400",
    strokeDashoffset: -110,
    height: 40,
    width: 63,
    path: "/",
    label: "Home",
  },
  {
    strokeDasharray: "70 400",
    strokeDashoffset: -128,
    height: 40,
    width: 83,
    path: "/services",
    label: "Services",
  },
  {
    strokeDasharray: "80 400",
    strokeDashoffset: -138,
    height: 40,
    width: 93,
    path: "/industries",
    label: "Industries",
  },
  {
    strokeDasharray: "50 400",
    strokeDashoffset: -118,
    height: 40,
    width: 68,
    path: "/about",
    label: "About",
  },
  {
    strokeDasharray: "66 400",
    strokeDashoffset: -126,
    height: 40,
    width: 80,
    path: "/projects",
    label: "Projects",
  },
  {
    strokeDasharray: "27 400",
    strokeDashoffset: -85,
    height: 40,
    width: 40,
    path: "/block-producer",
    label: "Bp",
  },
  {
    strokeDasharray: "40 400",
    strokeDashoffset: -98,
    height: 40,
    width: 53,
    path: "/blog",
    label: "Blog",
  },
];

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
            {PATHS.map((item) => (
              <li key={item.label}>
                <a href={useBaseUrl(item.path)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const NavbarMenu = () => {
  const logo = useRef(0);
  const content = useRef(0);
  const [pathname, setPathname] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  const handleLaguage = () => {
    window.open("https://es.eoscostarica.io/", "_blank");
  };

  const handleScroll = () => {
    const { matches } = window.matchMedia("(max-width: 768px)");

    if (matches) return;

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
      content.current.style.background = "#fff";
    } else {
      const transformValue = `scale(1, 1)`;

      logo.current.style.WebkitTransform = transformValue;
      logo.current.style.MozTransform = transformValue;
      logo.current.style.OTransform = transformValue;
      logo.current.style.transform = transformValue;

      content.current.style.height = "150px";
      content.current.style.background = "none";

    }
  };

  useLayoutEffect(() => {
    const pathname = window.location.pathname;
    window.addEventListener("scroll", handleScroll);

    setPathname(pathname);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.menuWrapper}>
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
            {PATHS.map((item) => (
              <li key={item.label}>
                <a href={useBaseUrl(item.path)}>
                  <div className={styles.svgWrapper}>
                    <svg height={item.height} width={item.width}>
                      <text x="10" y="25" fill="#000000">
                        {item.label}
                      </text>
                      <rect
                        className={styles.shape}
                        strokeDasharray={item.strokeDasharray}
                        height={item.height}
                        width={item.width}
                        strokeDashoffset={item.strokeDashoffset}
                        strokeWidth={pathname === item.path ? 12 : 0}
                      />
                    </svg>
                  </div>
                </a>
              </li>
            ))}
            <li>
              <div className={styles.languageWrapper}>
                <label className={styles.languageSwitcher}>
                  <input type="checkbox" checked readOnly />
                  <span className={clsx(styles.slider, styles.round)}></span>
                  <span className={styles.selectEs} onClick={handleLaguage}>
                    ES
                  </span>
                  <span
                    className={styles.selectEn}
                    onClick={() => console.log("tomelaaaaaaa 1")}
                  >
                    EN
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
