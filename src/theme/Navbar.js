import React, { useLayoutEffect, useState } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";
import { useLocation } from 'react-router-dom';


const PATHS = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/services/",
    label: "Services",
  },
  {
    path: "/industries/",
    label: "Industries",
  },
  {
    path: "/about/",
    label: "About",
  },
  {
    path: "/projects/",
    label: "Projects",
  },
  {
    path: "/block-producer/",
    label: "Bp",
  },
  {
    path: "/blog/",
    label: "Blog",
  },
  {
    path: "/contact-us/",
    label: "Contact",
  },
];

const NavbarMenu = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isBlog = location.pathname.substring(0,6) === '/blog/'
  const [pathname, setPathname] = useState("");
  const trigger = useScrollTrigger({
    disableHysteresis: true
  })

  const useTransparentBG =  trigger 

  useLayoutEffect(() => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  }, []);

  const handlerDrawer = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Box  className={clsx("navBar", { ["navBarScroll"]: useTransparentBG})} >
      <Box className={"menuWrapper"}>
        {isMobile && 
        <>
          <Box  className={["btnDrawer"]}>
            <IconButton onClick={handlerDrawer}>
              <MenuIcon  fontSize="large"/>
            </IconButton>
          </Box>
          <Drawer anchor={'left'} open={isOpen} onClose={handlerDrawer} >
            <Box className={"drawerContent"}>
                <img
                  className={"imgDrawer"}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              <Divider />
              <List>
                {PATHS.map((item) => (
                  <Link href={useBaseUrl(item.path)} key={item.label} style={{textDecoration: 'none'}}>
                      <ListItem button><span className={"linkItem"}>{item.label}</span></ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </>}
        {!isMobile && 
          <>
            <Box className={"boxLeft"}>
              <Box  className={"imgLogoBox"}>
              <img
                  className={!isBlog? clsx("imgLogo", {["imgLogoScroll"]: useTransparentBG})  : "imgLogoScroll"}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              </Box>
            </Box>
            <Box className={"boxRight"}>
              {!isMobile && (
                  <Box className={"boxLanguages"}>
                    <Link href="https://es.eoscostarica.io/" color="inherit" target="_blank" >Español</Link>
                    <span>{" / "}</span>
                    <Link href="" color="inherit">English</Link>
                  </Box>
                )}
                {PATHS.map((item) => (
                  <Link href={useBaseUrl(item.path)} key={item.label}>
                    <Box className={"svgWrapper"}>  
                      <h5 className={clsx("link",{["linkActive"] : pathname === item.path})}>{item.label}</h5>                  
                    </Box>
                  </Link>
                ))}
            </Box>
          </>
        }
      </Box>
    </Box> 
  );
};

export default NavbarMenu;
