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
import ListItem from '@material-ui/core/ListItem';
import { useLocation } from 'react-router-dom';


const PATHS = [
  {
    dropDown:false,
    path: "/",
    label: "Home",
  },
  {
    dropDown:true,
    path: "/",
    label: "About us",
    markerSize: "70px",
    subPaths: 
    [
      {
        path: "/services/",
        label: "Services",
      },
      /*{
        path: "/the-company/",
        label: "The company",
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
        path: "/press/",
        label: "Press",
      },*/
    ]
  },
  {
    dropDown:false,
    path: "/industries/",
    label: "Industries",
  },
  {
    dropDown:false,
    path: "https://guide.eoscostarica.io/",
    label: "Learning",
  },
  {
    dropDown:false,
    path: "/blog/",
    label: "Blog",
  },
  {
    dropDown:false,
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

  const isCurrentPath = (subPaths) =>{
    let res = false;
    subPaths.map((item) => {
      if(pathname === item.path) res=true
    })
    return res
  }

  return (
    <Box  className={clsx("navBar", { ["navBarScroll"]: useTransparentBG})} >
      <Box className={"menuWrapper"}>
        {isMobile && 
          <>
          {useTransparentBG && 
            <Box  className={"imgLogoBoxMobile"}>
              <img
                className={"imgLogoScroll"}
                src={useBaseUrl("img/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
            </Box>
            }
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
                            <Link href={useBaseUrl(subItem.path)} key={subItem.label} style={{textDecoration: 'none'}}>
                              <ListItem button><span className={"linkItem"}>{subItem.label}</span></ListItem>
                          </Link>
                          ))}
                        </>
                      }
                      {!item.dropDown && 
                        <Link href={useBaseUrl(item.path)} style={{textDecoration: 'none'}}>
                            <ListItem button><span className={"linkItem"}>{item.label}</span></ListItem>
                        </Link>
                      } 
                    </Box>
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
                  className={isBlog? "imgLogoScroll" : clsx("imgLogo", {["imgLogoScroll"]: useTransparentBG})}
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
                  <Box className={"boxMenuItems"}>
                    {PATHS.map((item) => (
                      <Box key={item.label}>
                        {!item.dropDown && 
                          <Link href={useBaseUrl(item.path)} key={item.label} style={{textDecoration:'none'}}>
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
                                  <Link href={useBaseUrl(subItem.path)} key={subItem.label} style={{textDecoration:'none'}}>
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
