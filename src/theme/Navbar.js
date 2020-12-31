import React, { useLayoutEffect, useState } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  navBar:{
    zIndex:3000,
    width:'100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'rgba(255, 255, 255, 0)',
  },
  navBarScroll:{
    backgroundColor:'rgba(255, 255, 255, 0.95)',
  },
  menuWrapper:{
    width:"1100px",
    display: 'flex',
    
    alignItems: 'center',
    fontWeight: 'bold',
    top: 0,
    transition: '0.2s',
    height: '60px',
    margin: '0 auto',
    paddingTop: '40px',
    paddingBottom: '40px',

  },
  boxLeft:{
    width:"100%",
    position: 'relative',
    display: 'flex',
  },
  imgBox:{
    position: 'absolute',
    left: '0px',
    top: '-20px',
    width: '330px',
  },
  img:{
    WebkitTransformOrigin: 'top left',
    WebkitTransition:'all 0.26s',
    WebkitTransform: 'scale(1, 1)',
    MozTransform:'scale(1, 1)',
    OTransform:'scale(1, 1)',
    transform:'scale(1, 1)'
  },
  imgDrawer:{
    padding: '10px',
    width: '50%',
  },
  imgScroll:{
    WebkitTransformOrigin: 'top left',
    WebkitTransition:'all 0.26s',
    WebkitTransform: 'scale(0.4, 0.4)',
    MozTransform:'scale(0.4, 0.4)',
    OTransform:'scale(0.4, 0.4)',
    transform:'scale(0.4, 0.4)'
  },
  boxRight:{
    width:"70%",
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  boxLanguages: {
    position: 'absolute',
    right: '5px',
    top: '-15px',
    fontSize:' 11px',
    fontWeight: '500',
  },
  svgWrapper:{
    marginTop: 0,
    display: 'inline-block',
    borderRadius: '3px',
    marginLeft: '5px',
    marginRight: '5px',
    
  },
  link: {
    position: 'relative',
    marginLeft:'15px',
    color: "black",
    fontWeight:'bold',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: '5px',
      display: 'block',
      marginTop: '5px',
      left: 0,
      right:' 100%',
      transitionProperty: 'left right',
      transitionDuration:' 0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover::after': {
      width: '100%',
      right: 0,
      background: '#5484b3',
    }
  },
  linkActive:{
    position: 'relative',
    marginLeft:'15px',
    color: "black",
    fontWeight:'bold',
    '&:after': {
      content: '""',
      position: 'absolute',
      height: '5px',
      display: 'block',
      marginTop: '5px',
      left: 0,
      right:' 100%',
      width: '100%',
      background: '#5484b3',
    },
  },
  btnDrawer:{
    position: 'absolute',
    right: '10px',
    top: '10px',
    color: '#5484b3'
  },
  drawerContent:{
    width: '60vw'
  },
  linkItem:{
    color:'black',
    textDecoration:'none',
    fontWeight:'bold',
    '&:focus, &:hover': {
      textDecoration: 'none'
    }
  }
});

const NavbarMenu = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()
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
    <Box  className={clsx(classes.navBar, { [classes.navBarScroll]: useTransparentBG})} >
      <Box className={classes.menuWrapper}>
        {isMobile && 
        <>
          <IconButton onClick={handlerDrawer} className={classes.btnDrawer}>
            <MenuIcon  fontSize="large"/>
          </IconButton>
          <Drawer anchor={'left'} open={isOpen} onClose={handlerDrawer} >
            <Box className={classes.drawerContent}>
                <img
                  className={classes.imgDrawer}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              <Divider />
              <List>
                {PATHS.map((item) => (
                  <Link href={useBaseUrl(item.path)} key={item.label} className={classes.linkItem} >
                      <ListItem button>{item.label}</ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </>}
        {!isMobile && 
          <>
            <Box className={classes.boxLeft}>
              <Box  className={classes.imgBox}>
              <img
                  className={!isBlog? clsx(classes.img, {[classes.imgScroll]: useTransparentBG})  : classes.imgScroll}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
              </Box>
            </Box>
            <Box className={classes.boxRight}>
              {!isMobile && (
                  <Box className={classes.boxLanguages}>
                    <Link href="https://es.eoscostarica.io/" color="inherit" target="_blank" >Español</Link>
                    <span>{" / "}</span>
                    <Link href="" color="inherit">English</Link>
                  </Box>
                )}
                {PATHS.map((item) => (
                  <Link href={useBaseUrl(item.path)} key={item.label}>
                    <Box className={classes.svgWrapper}>  
                      <Typography className={clsx(classes.link,{[classes.linkActive] : pathname === item.path})}>{item.label}</Typography>                  
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
