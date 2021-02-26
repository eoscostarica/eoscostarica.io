import React, { useLayoutEffect, useState, useEffect } from "react"
import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Divider from '@material-ui/core/Divider'
import { useLocation } from 'react-router-dom'

const PATHS = [
  {
    dropDown:false,
    path: "/",
    label: "Home",
    target: '_self'
  },
  {
    dropDown:true,
    path: "/services/",
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
      {
        path: "/press/",
        label: "Press",
        target: '_self'
      }
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

const NavbarMenu = ({isMobile, isDesktop}) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [isBlog, setIsBlog] =  useState()
  const [pathname, setPathname] = useState("")
  const trigger = useScrollTrigger({disableHysteresis:true})

  useEffect(() => {
    setIsBlog(location.pathname.substring(0,6) === '/blog/')
  }, [location])
  
  useLayoutEffect(() => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  }, [])

  const handlerDrawer = () =>{
    setIsOpen(!isOpen)
  }

  const isCurrentPath = (subPaths) =>{
    let res = false
    subPaths.map((item) => {
      if(pathname === item.path) res=true
    })
    return res
  }

  return (
    <Box className={isBlog? clsx("navBar","navBarScroll"): clsx("navBar",{["navBarScroll"]: (trigger || isMobile)})} >
      <Box className="menuWrapper">
        {isMobile && 
          <>
            <Box className="imgLogoBoxMobile">
              <img
                className="imgLogoScroll"
                src={useBaseUrl("img/logos/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
            </Box>
            <Box  className="btnDrawer">
              <IconButton onClick={handlerDrawer}>
                <MenuIcon  fontSize="large"/>
              </IconButton>
            </Box>
            <Drawer anchor={'right'} open={isOpen} onClose={handlerDrawer} >
              <Box className="drawerContent">
                <List>
                  <Link href={useBaseUrl(PATHS[0].path)} target={PATHS[0].target} style={{textDecoration: 'none'}}>
                    <ListItem button>
                      <span className="linkItem">Home</span>
                      </ListItem>
                  </Link>
                  <Divider />
                  <Box className="linkGruopBox">
                      <Box style={{marginBottom:'10px'}}>
                        <span className="linkGruopLabel">About us</span>
                      </Box>
                      {PATHS[1].subPaths.map((subItem) => (
                        <Box key={subItem.label}>
                          {subItem.label!="Press" &&
                            <Link href={useBaseUrl(subItem.path)} target={subItem.target}  style={{textDecoration: 'none'}}>
                              <ListItem button><span className="linkItem">{subItem.label}</span></ListItem>
                            </Link>
                          }
                        </Box>
                      ))}
                      <Link href={useBaseUrl(PATHS[2].path)} target={PATHS[2].target} style={{textDecoration: 'none'}}>
                        <ListItem button><span className="linkItem">{PATHS[2].label}</span></ListItem>
                      </Link>
                  </Box>
                  <Divider />
                  <Box className="linkGruopBox">
                    <Box style={{marginBottom:'10px'}}>
                      <span className="linkGruopLabel">Content for you</span>
                    </Box>
                    <Link href={useBaseUrl(PATHS[3].path)} target={PATHS[3].target} style={{textDecoration: 'none'}}>
                        <ListItem button><span className="linkItem">{PATHS[3].label}</span></ListItem>
                    </Link>
                    <Link href={useBaseUrl(PATHS[4].path)} target={PATHS[4].target} style={{textDecoration: 'none'}}>
                        <ListItem button><span className="linkItem">{PATHS[4].label}</span></ListItem>
                    </Link>
                    <Link href={useBaseUrl(PATHS[1].subPaths[5].path)} target={PATHS[1].subPaths[5].target} style={{textDecoration: 'none'}}>
                        <ListItem button><span className="linkItem">{PATHS[1].subPaths[5].label}</span></ListItem>
                    </Link>
                  </Box>
                  <Divider />
                  <Link href={useBaseUrl(PATHS[5].path)} target={PATHS[5].target} style={{textDecoration: 'none'}}>
                        <ListItem button><span className="linkItem">{PATHS[5].label}</span></ListItem>
                    </Link>
                </List>
              </Box>
            </Drawer>
          </>}
        {isDesktop && 
          <>
            <Box className="boxLeft">
              <Box  className="imgLogoBox">
                <img
                  className={isBlog? "imgLogoScroll": clsx("imgLogo",{["imgLogoScroll"]: trigger})}
                  src={useBaseUrl("img/logos/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              </Box>
            </Box>
            <Box className="boxRight">
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
                  <Box className="boxMenuItems" id="boxMenuItems">
                    {PATHS.map((item) => (
                      <Box key={item.label}>
                        {!item.dropDown && 
                          <Link className="navBarItemTab" href={useBaseUrl(item.path)} target={item.target} key={item.label} style={{textDecoration:'none'}}>
                            <Box className="menuItem">  
                              <h5 className={clsx("link",{["linkActive"]: pathname === item.path})}>{item.label}</h5>                  
                            </Box>
                          </Link>
                        }
                        {item.dropDown && 
                          <Box tabIndex="0" className={clsx("menuItem","navBarItemTab")} >  
                              <h5 className={clsx("link",{["linkActive"]: isCurrentPath(item.subPaths)})}>{item.label}</h5>
                            <Box className={clsx("dropDownMenu",{["dropDownMenuActive"]: isCurrentPath(item.subPaths)})} style={{width:item.markerSize}}>
                                {item.subPaths.map((subItem) => (
                                  <Link className="navBarItemTab" href={useBaseUrl(subItem.path)} target={subItem.target} key={subItem.label} style={{textDecoration:'none'}}>
                                    <Box>  
                                      <h5 className={clsx("menuItemDrop",{["menuItemDropActive"]: pathname === subItem.path})} >{subItem.label}</h5>                  
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

NavbarMenu.propTypes = {
  isDesktop:PropTypes.bool,
  isMobile:PropTypes.bool,
}

export default NavbarMenu;
