import React, { useState } from "react";
import clsx from "clsx";

import IconSvg from "./IconSvg";
import styles from "../../styles.module.css";

const Accordion = ({ content, title, titleStyle, useMaxWidth = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <span className={clsx(styles.titleText, titleStyle)}>{title}</span>
        <IconSvg isOpen={isOpen} />
      </div>
      <div
        className={clsx(styles.content, {
          [styles.contentOpen]: isOpen,
          [styles.boxWrapper]: useMaxWidth,
        })}
      >
        <div
          className={clsx(styles.contentText, {
            [styles.contentTextOpen]: isOpen,
          })}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Accordion);
