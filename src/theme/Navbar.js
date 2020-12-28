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

const PATHS = [
  {
    strokeDasharray: "47 400",
    strokeDashoffset: -110,
    height: 40,
    width: 63,
    path: "/",
    label: "Home",
  },
  {
    strokeDasharray: "70 400",
    strokeDashoffset: -128,
    height: 40,
    width: 83,
    path: "/services/",
    label: "Services",
  },
  {
    strokeDasharray: "80 400",
    strokeDashoffset: -138,
    height: 40,
    width: 93,
    path: "/industries/",
    label: "Industries",
  },
  {
    strokeDasharray: "50 400",
    strokeDashoffset: -118,
    height: 40,
    width: 68,
    path: "/about/",
    label: "About",
  },
  {
    strokeDasharray: "66 400",
    strokeDashoffset: -126,
    height: 40,
    width: 80,
    path: "/projects/",
    label: "Projects",
  },
  {
    strokeDasharray: "27 400",
    strokeDashoffset: -85,
    height: 40,
    width: 40,
    path: "/block-producer/",
    label: "Bp",
  },
  {
    strokeDasharray: "40 400",
    strokeDashoffset: -98,
    height: 40,
    width: 53,
    path: "/blog/",
    label: "Blog",
  },
];

const useStyles = makeStyles({
  menuWrapper:{
    display: 'flex',
    backgroundColor:'rgba(255, 255, 255, 0)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: '0.2s',
    height: '60px',
    margin: '0 auto',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft:"10vw",
    paddingRight:"10vw",
  },
  menuWrapperScroll:{
    backgroundColor:'rgba(255, 255, 255, 0.95)',
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
  shape: {
    fill: 'transparent',
    stroke: '#5484b3',
    transition: '1s all ease',
    '&:hover': {
      strokeDasharray: "50 0",
      strokeWidth:' 3px',
      strokeDashoffset: 0,
      stroke: '#5484b3',
    }
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false);
  const isBlog = location.pathname.substring(0,6) === '/blog/'
  const [pathname, setPathname] = useState("");
  const trigger = useScrollTrigger({
    target: window || undefined,
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
    <Box  className={clsx(classes.menuWrapper, { [classes.menuWrapperScroll]: useTransparentBG})}>
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
                    <svg height={item.height} width={item.width}>
                      <text x="10" y="25" fill="#000000" className={classes.textItem}>
                        {item.label}
                      </text>
                      <rect
                        className={classes.shape}
                        strokeDasharray={item.strokeDasharray}
                        height={item.height}
                        width={item.width}
                        strokeDashoffset={item.strokeDashoffset}
                        strokeWidth={pathname === item.path ? 12 : 0}
                      />
                    </svg>
                  </Box>
                </Link>
              ))}
          </Box>
        </>
      }
    </Box>
  );
};

export default NavbarMenu;
