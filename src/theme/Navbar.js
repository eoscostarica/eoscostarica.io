import React, { useLayoutEffect, useState, useEffect } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useMediaQuery } from 'react-responsive'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useLocation } from 'react-router-dom';

const PATHS = [
  {
    dropDown:false,
    path: "/",
    label: "Home",
    target: '_self'
  },
  {
    dropDown:true,
    path: "/",
    label: "About us",
    target: '_self',
    markerSize: "70px",
    subPaths: 
    [
      {
        path: "/services/",
        label: "Services",
        target: '_self'
      },
      {
        path: "/the-company/",
        label: "The company",
        target: '_self'
      },
      {
        path: "/team/",
        label: "Team",
        target: '_self'
      },
      {
        path: "/projects/",
        label: "Projects",
        target: '_self'
      },
      {
        path: "/block-producer/",
        label: "Block producer",
        target: '_self'
      },
      /*{
        path: "/press/",
        label: "Press",
        target: '_self'
      },
      */
    ]
  },
  {
    dropDown:false,
    path: "/industries/",
    label: "Industries",
    target: '_self'
  },
  {
    dropDown:false,
    path: "https://guide.eoscostarica.io/",
    label: "Learning",
    target: '_blank'
  },
  {
    dropDown:false,
    path: "/blog/",
    label: "Blog",
    target: '_self'
  },
  {
    dropDown:false,
    path: "/contact-us/",
    label: "Contact",
    target: '_self'
  },
];

const NavbarMenu = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isDesktop = useMediaQuery({ query:'(min-width: 767px)'})
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isBlog, setIsBlog] =  useState();
  const [pathname, setPathname] = useState("");
  const trigger = useScrollTrigger({disableHysteresis:true});


  useEffect(() => {
    setIsBlog(location.pathname.substring(0,6) === '/blog/')
  }, [location]);
  
  useLayoutEffect(() => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  }, []);

  const handlerDrawer = () =>{
    setIsOpen(!isOpen)
  }

  const isCurrentPath = (subPaths) =>{
    let res = false;
    subPaths.map((item) => {
      if(pathname === item.path) res=true
    })
    return res
  }

  return (
    <Box className={clsx("navBar", "navBarScroll")}>
      <Box className={"menuWrapper"}>
        {isMobile && 
          <>
            <Box className={"imgLogoBoxMobile"}>
              <img
                className={"imgLogoScroll"}
                src={useBaseUrl("img/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
            </Box>
            <Box  className={"btnDrawer"}>
              <IconButton onClick={handlerDrawer}>
                <MenuIcon  fontSize="large"/>
              </IconButton>
            </Box>
            <Drawer anchor={'right'} open={isOpen} onClose={handlerDrawer} >
              <Box className={"drawerContent"}>
                <List>
                  {PATHS.map((item) => (
                    <Box  key={item.label}>
                      {item.dropDown && 
                        <>
                          {item.subPaths.map((subItem) => (
                            <Link href={useBaseUrl(subItem.path)} target={subItem.target} key={subItem.label} style={{textDecoration: 'none'}}>
                              <ListItem button><span className={"linkItem"}>{subItem.label}</span></ListItem>
                          </Link>
                          ))}
                        </>
                      }
                      {!item.dropDown && 
                        <Link href={useBaseUrl(item.path)} target={item.target} style={{textDecoration: 'none'}}>
                            <ListItem button><span className={"linkItem"}>{item.label}</span></ListItem>
                        </Link>
                      } 
                    </Box>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>}
        {isDesktop && 
          <>
            <Box className={"boxLeft"}>
              <Box  className={"imgLogoBox"}>
                <img
                  className={isBlog? "imgLogoScroll" : clsx("imgLogo", {["imgLogoScroll"]: trigger})}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              </Box>
            </Box>
            <Box className={"boxRight"}>
                {/*!isMobile && (
                    <Box className={"boxLanguages"}>
                      <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>Español</Grid>
                        <Grid item>
                          <label className="switch">
                            <input type="checkbox" checked onChange={() => window.open("https://es.eoscostarica.io/","_self")}/>
                            <span className="slider round"></span>
                          </label>
                        </Grid>
                        <Grid item>English</Grid>
                      </Grid>
                    </Box>
                )*/}
                  <Box className={"boxMenuItems"} id={"boxMenuItems"}>
                    {PATHS.map((item) => (
                      <Box key={item.label}>
                        {!item.dropDown && 
                          <Link href={useBaseUrl(item.path)} target={item.target} key={item.label} style={{textDecoration:'none'}}>
                            <Box className={"menuItem"}>  
                              <h5 className={clsx("link",{["linkActive"] : pathname === item.path})}>{item.label}</h5>                  
                            </Box>
                          </Link>
                        }
                        {item.dropDown && 
                          <Box className={"menuItem"}>  
                            <h5 className={clsx("link",{["linkActive"] : isCurrentPath(item.subPaths)})}>{item.label}</h5>
                            <Box className={clsx("dropDownMenu",{["dropDownMenuActive"] : isCurrentPath(item.subPaths)})}  style={{width:item.markerSize}}>
                                {item.subPaths.map((subItem) => (
                                  <Link href={useBaseUrl(subItem.path)} target={subItem.target}  key={subItem.label} style={{textDecoration:'none'}}>
                                    <Box>  
                                      <h5 className={clsx("menuItemDrop",{["menuItemDropActive"] : pathname === subItem.path})} >{subItem.label}</h5>                  
                                    </Box>
                                  </Link>
                                ))}
                            </Box>                    
                          </Box>
                        }
                      </Box>
                    ))}
                </Box> 
            </Box>
          </>
        }
      </Box>
    </Box> 
  );
};

export default NavbarMenu;
