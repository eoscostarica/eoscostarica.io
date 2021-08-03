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
import { useLocation } from 'react-router-dom'

import CustomListItem from '../pages/components/CustomListItem'

const PATHS = [
  {
    dropDown:false,
    path: "/",
    espPath: "/",
    label: "Home",
    target: '_self',
    icon: 'img/icons/navbar/home.png'
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
        icon: 'img/icons/navbar/services.png'
      },
      {
        path: "/the-company/",
        espPath: "/compañia/",
        label: "The company",
        target: '_self',
        icon: 'img/icons/navbar/company.png'
      },
      {
        path: "/team/",
        espPath: "/equipo/",
        label: "Team",
        target: '_self',
        icon: 'img/icons/navbar/team.png'
      },
      {
        path: "/projects/",
        espPath: "/proyectos/",
        label: "Projects",
        target: '_self',
        icon: 'img/icons/navbar/projects.png'
      },
      {
        path: "/block-producer/",
        espPath: "/productor-de-bloques/",
        label: "Block producer",
        target: '_self',
        icon: 'img/icons/navbar/blockproducer.png'
      },
      {
        path: "/press/",
        espPath: "/prensa/",
        label: "Press",
        target: '_self',
        icon: 'img/icons/navbar/press.png'
      }
    ]
  },
  {
    dropDown:false,
    path: "/industries/",
    espPath: "/industrias/",
    label: "Industries",
    target: '_self',
    icon: 'img/icons/navbar/industries.png'
  },
  {
    dropDown:true,
    path: "https://guide.eoscostarica.io/",
    espPath: "https://guias.eoscostarica.io/",
    label: "Learning",
    target: '_self',
    markerSize: "70px",
    icon: 'img/icons/navbar/learning.png',
    subPaths: [
      {
        path: "https://guide.eoscostarica.io/",
        espPath: "https://guias.eoscostarica.io/",
        label: "Dev resources",
        target: '_self',
        icon: 'img/icons/navbar/dev-resource.png'
      },
      {
        path: "/do-you-need-blockchain/",
        label: "/do-you-need-blockchain/",
        label: "Corp resources",
        target: '_self',
        icon: 'img/icons/navbar/archive.png'
      },
    ]
  },
  {
    dropDown:false,
    path: "/blog/",
    espPath: "/blog/",
    label: "Blog",
    target: '_self',
    icon: 'img/icons/navbar/blog.png'
  },
  {
    dropDown:false,
    path: "/contact-us/",
    espPath: "/contactenos/",
    label: "Contact",
    target: '_self',
    icon: 'img/icons/navbar/contact.png'
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

  useEffect(() => {
    if(isBlog) setPathname('/blog/')
  }, [isBlog])
  
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
    let espPath = path

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

  const LanguagueSelector = () => {
    const [langMenuHandler, seLangMenuHandler] = useState(false);

    const handleClickMenuLang = () => {
      seLangMenuHandler(true)
    }
  
    const handleCloseMenuLang = () => {
      seLangMenuHandler(false)
    }

    const handleChangeLang = () => {
      seLangMenuHandler(false)
      translateSite()
    }

    const LangItem = ({label, handleClick, classN}) =>{
      return (
        <Box className="langItemBox" onClick={handleClick}>
          <span className={classN} style={{fontSize: '15px'}}>{label}</span>
        </Box>
      )
    }

    return (
      <>
        <IconButton
          style={{padding:'0', marginTop:'-10px'}}
          onClick={handleClickMenuLang}
        >
          <img src={useBaseUrl('img/icons/navbar/global.png')} style={{width:'45px', height: '45px'}}/>
        </IconButton>
        {true && (
          <Box  className={clsx("boxLanguagesSelector",{["boxLanguagesSelectorActive"]: langMenuHandler})} onMouseLeave={handleCloseMenuLang}>
            <LangItem
              label="ES"
              handleClick={handleChangeLang}
              classN="langItem"
            />
            <span style={{fontSize: '15px', padding: '5px'}}>|</span>
            <LangItem 
              label="EN"
              handleClick={handleCloseMenuLang}
              classN="langItemActive"
            />
          </Box>
        )}
      </>
    )
  }

  return (
    <Box className={clsx("navBar",{["navBarScroll"]: (trigger || isMobile)})} >
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
                    <CustomListItem href={useBaseUrl(PATHS[3].subPaths[0].path)} target={PATHS[3].subPaths[0].target} label={PATHS[3].subPaths[0].label} icon={PATHS[3].subPaths[0].icon} isSelected={pathname===PATHS[3].subPaths[0].path}/>
                    <CustomListItem href={useBaseUrl(PATHS[3].subPaths[1].path)} target={PATHS[3].subPaths[1].target} label={PATHS[3].subPaths[1].label} icon={PATHS[3].subPaths[1].icon} isSelected={pathname===PATHS[3].subPaths[1].path}/>
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
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">OPTIONS</span>
                    <CustomListItem href="https://es.eoscostarica.io/" target="_blank" label="Spanish website" icon={'img/icons/navbar/global.png'} isSelected={false}/>
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
                    className={clsx("imgLogo",{["imgLogoScroll"]: trigger})}
                    src={useBaseUrl("img/logos/eoscr-logo.png")}
                    alt="EOS CR LOGO"
                  />
                </a>
              </Box>
            </Box>
            <Box className="boxRight"> 
              <Box className={"boxLanguages"}>
                <LanguagueSelector />
              </Box>
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
                                  <h5 className={clsx("menuItemDrop",{["menuItemDropActive"]: pathname === subItem.path})}>{subItem.label}</h5>                  
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
