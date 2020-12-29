import React, { useState } from "react";
import clsx from "clsx";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../../../theme/index'

import IconSvg from "./IconSvg";
import styles from "../../styles.module.css";

const Accordion = ({ content, title, titleStyle, useMaxWidth = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={Theme}>
      <Box className={styles.accordion}>
        <Box className={styles.title} onClick={() => setIsOpen(!isOpen)}>
          <Typography variant="h4" className={clsx(styles.titleText, titleStyle)}>{title}</Typography>
          <IconSvg isOpen={isOpen} />
        </Box>
        <Box
          className={clsx(styles.content, {
            [styles.contentOpen]: isOpen,
            [styles.boxWrapper]: useMaxWidth,
          })}
        >
          <Box
            className={clsx(styles.contentText, {
              [styles.contentTextOpen]: isOpen,
            })}
          >
            {content}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default React.memo(Accordion);
