import React, { useState, useEffect } from "react";
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
              <a href={useBaseUrl("/")}>Inicio</a>
            </li>
            <li>
              <a href={useBaseUrl("/servicios")}>Servicios</a>
            </li>
            <li>
              <a href={useBaseUrl("/industrias")}>Industrias</a>
            </li>
            <li>
              <a href={useBaseUrl("/acerca")}>Acerca</a>
            </li>
            <li>
              <a href={useBaseUrl("/proyectos")}>Proyectos</a>
            </li>
            <li>
              <a href={useBaseUrl("/block-producer")}>BP</a>
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
  const [pathname, setPathname] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;

    setPathname(pathname);
  }, []);

  return (
    <div className={styles.customMenu}>
      {isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={styles.boxLeft}>
        <img src={useBaseUrl("img/eoscr-logo.png")} alt="EOS CR LOGO" />
      </div>
      <div className={styles.boxRight}>
        <ul>
          <li>
            <a
              href={useBaseUrl("/")}
              className={clsx({ [styles.selected]: pathname === "/" })}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/servicios")}
              className={clsx({
                [styles.selected]: pathname.includes("/servicios"),
              })}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/industrias")}
              className={clsx({
                [styles.selected]: pathname.includes("/industrias"),
              })}
            >
              Industrias
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/acerca")}
              className={clsx({
                [styles.selected]: pathname.includes("/acerca"),
              })}
            >
              Acerca
            </a>
          </li>
          <li>
            <a
              href={useBaseUrl("/proyectos")}
              className={clsx({
                [styles.selected]: pathname.includes("/proyectos"),
              })}
            >
              Proyectos
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
