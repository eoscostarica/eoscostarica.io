import React, { useLayoutEffect, useRef } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

import styles from "./styles.module.css";

const NavbarMenu = () => {
  const logo = useRef(0);
  const content = useRef(0);
  const pathname = window.location.pathname;

  const handleScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      const transformValue = `scale(0.3, 0.3)`;

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

  return (
    <div className={styles.menu} ref={content}>
      <div className={styles.boxLeft}>
        <img
          ref={logo}
          src="../../static/img/eoscr-logo.png"
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
              className={clsx({ [styles.selected]: pathname.includes("/bp") })}
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
