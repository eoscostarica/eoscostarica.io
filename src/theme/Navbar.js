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
import Grid from '@material-ui/core/Grid'
import { useLocation } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import ComputerIcon from '@material-ui/icons/Computer';
import ApartmentIcon from '@material-ui/icons/Apartment'
import GroupIcon from '@material-ui/icons/Group'
import ListAltIcon from '@material-ui/icons/ListAlt'
import GridOnIcon from '@material-ui/icons/GridOn'
import EditIcon from '@material-ui/icons/Edit'
import BusinessIcon from '@material-ui/icons/Business'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import MailIcon from '@material-ui/icons/Mail'
import ForumIcon from '@material-ui/icons/Forum'

import CustomListItem from '../pages/components/CustomListItem'

const PATHS = [
  {
    dropDown:false,
    path: "/",
    espPath: "/",
    label: "Home",
    target: '_self',
    icon: <HomeIcon style={{width:'20px'}}/>
  },
  {
    dropDown:true,
    path: "/services/",
    espPath: "/servicios/",
    label: "About us",
    target: '_self',
    markerSize: "70px",
    subPaths: 
    [
      {
        path: "/services/",
        espPath: "/servicios/",
        label: "Services",
        target: '_self',
        icon: <ComputerIcon style={{width:'20px'}}/> 
      },
      {
        path: "/the-company/",
        espPath: "/compañia/",
        label: "The company",
        target: '_self',
        icon: <ApartmentIcon style={{width:'20px'}}/>
      },
      {
        path: "/team/",
        espPath: "/equipo/",
        label: "Team",
        target: '_self',
        icon: <GroupIcon style={{width:'20px'}}/> 
      },
      {
        path: "/projects/",
        espPath: "/proyectos/",
        label: "Projects",
        target: '_self',
        icon: <ListAltIcon style={{width:'20px'}}/>
      },
      {
        path: "/block-producer/",
        espPath: "/productor-de-bloques/",
        label: "Block producer",
        target: '_self',
        icon: <GridOnIcon style={{width:'20px'}}/>
      },
      {
        path: "/press/",
        espPath: "/prensa/",
        label: "Press",
        target: '_self',
        icon: <ForumIcon style={{width:'20px'}}/>
      }
    ]
  },
  {
    dropDown:false,
    path: "/industries/",
    espPath: "/industrias/",
    label: "Industries",
    target: '_self',
    icon: <BusinessIcon style={{width:'20px'}}/>
  },
  {
    dropDown:false,
    path: "https://guide.eoscostarica.io/",
    label: "Learning",
    target: '_blank',
    icon: <MenuBookIcon style={{width:'20px'}}/>
  },
  {
    dropDown:false,
    path: "/blog/",
    espPath: "/blog/",
    label: "Blog",
    target: '_self',
    icon: <EditIcon style={{width:'20px'}}/>
  },
  {
    dropDown:false,
    path: "/contact-us/",
    espPath: "/contactenos/",
    label: "Contact",
    target: '_self',
    icon: <MailIcon style={{width:'20px'}}/>
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

  const getSpanishPath = (path) => {
    let espPath

    PATHS.map((item) => {
      if(item.dropDown){
        item.subPaths.map((subitem) => {
          if(subitem.path===path) espPath=subitem.espPath
        })
      }else{
        if(item.path===path) espPath=item.espPath
      }
    })

    return espPath
  }

  const translateSite = () => {
    window.open(`https://es.eoscostarica.io${getSpanishPath(pathname)}`,'_self')
  }

  return (
    <Box className={isBlog? clsx("navBar","navBarScroll"): clsx("navBar",{["navBarScroll"]: (trigger || isMobile)})} >
      <Box className="menuWrapper">
        {isMobile && 
          <>
            <Box className="imgLogoBoxMobile">
              <a href={useBaseUrl("/")} alt="EOS CR LOGO">
                <img
                  className="imgLogoScroll"
                  src={useBaseUrl("img/logos/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              </a>
            </Box>
            <Box  className="btnDrawer">
              <IconButton onClick={handlerDrawer}>
                <MenuIcon  fontSize="large"/>
              </IconButton>
            </Box>
            <Drawer anchor={'right'} open={isOpen} onClose={handlerDrawer} >
              <Box className="drawerContent">
                <List>
                  <Box className="linkGruopBox">
                    <CustomListItem href={useBaseUrl(PATHS[0].path)} target={PATHS[0].target} label={PATHS[0].label} icon={PATHS[0].icon} isSelected={pathname===PATHS[0].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">ABOUT US</span>
                    {PATHS[1].subPaths.map((subItem) => (
                      <Box key={subItem.label}>
                        {subItem.label!="Press" &&
                          <CustomListItem  href={useBaseUrl(subItem.path)} target={subItem.target} label={subItem.label} icon={subItem.icon} isSelected={pathname===subItem.path}/>
                        }
                      </Box>
                    ))}
                    <CustomListItem href={useBaseUrl(PATHS[2].path)} target={PATHS[2].target} label={PATHS[2].label} icon={PATHS[2].icon} isSelected={pathname===PATHS[2].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">CONTENT FOR YOU</span>
                    <CustomListItem href={useBaseUrl(PATHS[3].path)} target={PATHS[3].target} label={PATHS[3].label} icon={PATHS[3].icon} isSelected={pathname===PATHS[3].path}/>
                    <CustomListItem href={useBaseUrl(PATHS[4].path)} target={PATHS[4].target} label={PATHS[4].label} icon={PATHS[4].icon} isSelected={pathname===PATHS[4].path}/>
                    <CustomListItem href={useBaseUrl(PATHS[1].subPaths[5].path)} 
                    target={PATHS[1].subPaths[5].target} 
                    label={PATHS[1].subPaths[5].label} 
                    icon={PATHS[1].subPaths[5].icon} 
                    isSelected={pathname===PATHS[1].subPaths[5].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">CONTACT</span>
                    <CustomListItem href={useBaseUrl(PATHS[5].path)} target={PATHS[5].target} label={PATHS[5].label} icon={PATHS[5].icon} isSelected={pathname===PATHS[5].path}/>
                  </Box>
                </List>
              </Box>
            </Drawer>
          </>}
        {isDesktop && 
          <>
            <Box className="boxLeft">
              <Box  className="imgLogoBox">
                <a href={useBaseUrl("/")}>
                  <img
                    className={isBlog? "imgLogoScroll": clsx("imgLogo",{["imgLogoScroll"]: trigger})}
                    src={useBaseUrl("img/logos/eoscr-logo.png")}
                    alt="EOS CR LOGO"
                  />
                </a>
              </Box>
            </Box>
            <Box className="boxRight">
                  {/* 
                  <Box className={"boxLanguages"}>
                    <Grid component="label" container alignItems="center" spacing={1}>
                      <Grid item><span className="languageLabel">Esp</span></Grid>
                      <Grid item>
                        <label className="switch">
                          <input 
                            type="checkbox" 
                            checked
                            onChange={translateSite}
                          />
                          <span className="slider round"></span>
                        </label>
                      </Grid>
                      <Grid item><span className="languageLabelActive">Eng</span></Grid>
                    </Grid>
                  </Box>
                  */}
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
