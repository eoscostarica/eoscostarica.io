import React, { useState } from "react";
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
              <a href={useBaseUrl("/industries")}>Industries</a>
            </li>
            <li>
              <a href={useBaseUrl("/projects")}>Projects</a>
            </li>
            <li>
              <a href={useBaseUrl("/block-producer")}>Bp</a>
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
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.customMenu}
    >
      {isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={styles.boxLeft}>
        <img
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
              href={useBaseUrl("/block-producer")}
              className={clsx({
                [styles.selected]: pathname.includes("/block-producer"),
              })}
            >
              BP
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/industries")}
              className={clsx({
                [styles.selected]: pathname.includes("/industries"),
              })}
            >
              Industries
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/projects")}
              className={clsx({
                [styles.selected]: pathname.includes("/projects"),
              })}
            >
              Projects
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
