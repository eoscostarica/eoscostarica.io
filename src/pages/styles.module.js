import { makeStyles } from '@material-ui/core/styles'

  const useStyles = makeStyles((theme) => ({
    /*Typography */
    h1: {
      font:'Gotham',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontSize: '60px',
      letterSpacing: '-0.24px',
      lineHeight: '60px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '50px',
      },
    },
    h2: {
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontSize: '40px',
      letterSpacing: '-0.24px',
      lineHeight: '44px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '24px',
      letterSpacing: '-0.06px',
      lineHeight: '9px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '20px',
      letterSpacing: '-0.06px',
      lineHeight: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '10px',
      },
    },
    h5: {
      fontWeight: 'normal',
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '20px'
    },
    h6: {
      fontWeight: 'normal',
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '20px'
    },
    subtitle1: {
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '25px'
    },
    subtitle2: {
      fontWeight: 'normal',
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px'
    },
    body1: {
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontSize: '19px',
      letterSpacing: '-0.05px',
      lineHeight: '25px',
      textAlign:'justify'
    },
    body2: {
      fontSize: '12px',
      letterSpacing: '-0.04px',
      lineHeight: '18px'
    },
    button: {
      fontSize: '14px'
    },
    caption: {
      fontSize: '11px',
      letterSpacing: '0.33px',
      lineHeight: '13px'
    },
    overline: {
      fontSize: '11px',
      fontWeight: 'normal',
      letterSpacing: '0.33px',
      lineHeight: '13px',
      textTransform: 'uppercase'
    },
    buttonPrimary: {
        width: '198px',
        height: '60px',
        backgroundColor: '#5484b3',
        fontSize: '21px',
        color: '#ffffff',
        borderRadius:'0px',
        '&:hover': {
          backgroundColor: '#757575',
          color: '#ffffff'
        }
    },
    buttonSecondary: {
        width: '198px',
        height: '60px',
        backgroundColor: 'transparent',
        fontSize: '21px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        border: 'solid 1px #979797',
        color: '#000000'
    },
    white: {
        color: '#FFFFFF'
    },

    /**home */
<<<<<<< HEAD
    mainContainer:{
      overflowX:'hidden'
    },
=======
>>>>>>> master
    container:{
      width:'100%',
      display: 'flex',
      justifyContent: 'center',
    },
    containerGray:{
      width:'100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#f1f1f1',
    },
    containerBlack:{
      width:'100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    content:{
      width:"960px",
      display: 'flex',
    },
    bgParallax:{
      width:'100vw',
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      height:'780px',
    },
    bgParallaxSecondary:{
      width:'100vw',
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      height:'2000px',
    },
    imgParallax:{
      zIndex:1,
      height:'100%',
      width:"100vw",
      backgroundImage:'url("../../static/img/blureoslogo.png")',
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'right bottom',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#f1f1f1',
        backgroundImage:'none',
      },
    },
    titleBox:{
      marginBottom: '3rem',
    },
    h3Box:{
      marginBottom: '2rem',
    },
    buttonBox:{
      marginTop: '3rem',
      marginBottom: '3rem',
    },
    sectionHero:{
      width:"1100px",
      height:' 780px',
      paddingTop:"250px",
      [theme.breakpoints.down('sm')]: {
        paddingTop:"100px",
      },
    },
    logoMobile:{
      marginBottom: '2rem',
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    section:{
      paddingBottom:'140px',
      width:"1100px",
<<<<<<< HEAD
      [theme.breakpoints.down('sm')]: {
        width:"100%",
      },
    },
    sectionNoPadding:{
      width:"1100px",
      [theme.breakpoints.down('sm')]: {
        width:"100%",
      },
=======
    },
    sectionNoPadding:{
      width:"1100px",
>>>>>>> master
    },
    sectionPadding:{
      paddingTop:'140px',
      paddingBottom:'140px',
      width:"1100px",
<<<<<<< HEAD
      [theme.breakpoints.down('sm')]: {
        width:"100%",
      },
    },
    accordionBox:{
      marginTop: '3rem',
      [theme.breakpoints.down('sm')]: {
        width:"95%",
      },
    },
    accordion:{
      width:'100%',
=======
    },
    accordionBox:{
      marginTop: '3rem',
    },
    accordion:{
>>>>>>> master
      backgroundColor: '#f1f1f1',
      border:'none',
      margin: 0,
      padding:0,
      boxShadow:'none',
      marginBottom:'10px',
      "&.MuiAccordion-root:before": {
        backgroundColor: '#f1f1f1',
<<<<<<< HEAD
        margin: 0,
        padding:0,
=======
>>>>>>> master
      }
    },
    accordionPadding:{
      padding:0
    },
    imgBox:{
      display:'flex',
      justifyContent:'center',
      height: '288px',
      paddingBottom: '3rem',
    },
    spacingBox:{
      marginTop: '3rem',
      marginBottom: '3rem',
    },
    doubleSpacingBox:{
      marginTop: '6rem',
      marginBottom: '6rem',
    },
    inquiereBox:{
      display:'flex',
      alignItems:'center', 
      height:'500px',
    },
    imgBoxRight:{
      display:'flex',
      justifyContent:'flex-end',
    },
    imgBoxLeft:{
      display:'flex',
      justifyContent:'flex-start',
    },
    imgKnow:{
      width:"90%"
    },
    imgProjects:{
      width:"85%"
    }


  }))
  
  export default useStyles