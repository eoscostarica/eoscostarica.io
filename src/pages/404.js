import React from "react";
import { useHistory } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import Layout from "@theme/Layout";
import Box from '@material-ui/core/Box'

const Error404 = () => {
  const history = useHistory();
  return (
    <Layout>
      <Parallax strength={800}>
          <Background className={"bgParallax"}>
              <Box className={"imgParallax"} />
          </Background>
          <Box className={"containerSec"}>
            <Box className={"sectionHero"}>
              <Box className={"titleBox"}>
                <h1>Page under construction</h1>
              </Box>
              <p>We're still working on this page. Contact us and we'll let you know when we're ready.</p>
              <Box className={"buttonBox"}>
                <button className={"buttonPrimary"} onClick={() => history.push("/contact-us/")} >Contact us</button>
              </Box>
            </Box>
          </Box>
      </Parallax>
    </Layout>
  );
};

export default Error404;
