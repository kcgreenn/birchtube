import { makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles({
    main: {
      display:'grid',
      gridTemplateColumns:'35vw 65vw',
      // gridTemplateRows:'repeat(5, 840px)',
      gridTemplateRows: '840px 740px 840px 1040px 1240px 840px',
      paddingRight:"5vw",
      overflow: 'hidden',
      scrollBehavior:'smooth',
    },
    subtitle: {
      // color:'#6288d5',
      color:'black',
      margin:'4rem 0'
    },
    profileImageContainer: {
      backgroundColor:'black',
      gridColumn:'0',
      gridRowEnd:'span 6',
    },
    portSection: {
      minHeight: '40vh',
      padding: '0vh 5vh',
      marginBottom: '5vh',
    },
    sectionItem: {
      minWidth: '30vw',
      maxWidth: '70vw'
    },
    eduTitle: {
      display: 'flex',
      alignItems: 'center',
      minWidth: '70vw',
      color:'#6288d5'
    },
    sectionTitle:{
      fontSize:'4rem',
      fontFamily:'Poppins',
      fontWeight:700,
      lineHeight:'3rem'
    },
    sectionSubtitle:{
      fontFamily:'Poppins',
      fontSize:'1.5rem',
      fontWeight:500,
      color:'#0080ff',
      marginTop:'-24px'
    },
    sectionDescription:{
      fontFamily:'Poppins',
      fontSize:'1.1rem',
      textDecoration:'none',
      color:'black',
      width:'60%'
    },
    contactCTA:{
      width:148,
      height:'4rem',
      textAlign:'center',
      fontFamily:'Poppins',
      fontWeight:700,
      fontSize:'1rem',
      color:'#0080ff',
      border:'1px solid #0080ff',
      borderRadius:'30px',
      backgroundColor:'white',
      display:'inline',
      cursor:'pointer',
      textDecoration:'none'
    },
    downwardPointer:{
      border:'2px solid #cecece',
      borderRadius:30,
      height:'4rem',
      width:54,
      marginLeft:'10vw',
      cursor:'pointer',
      backgroundColor:'white'
    },
    animatedPointer:{
      // marginLeft:'-4px',
      width:27,
      height:18,
      backgroundColor:'#3e3e3e',
      clipPath: 'polygon(50% 50%, 100% 30%, 50% 100%, 0 30%)',
      animation: '$mouseAnim 1s infinite',
      transform: 'rotate(-45deg)',
    },
    "@keyframes mouseAnim":{
      "0%":   { transform: "translateX(12px) translateY(16px)" },
      "50%":  { transform: "translateX(12px) translateY(24px)" },
      "100%": { transform: "translateX(12px) translateY(16px)"},
    },
    indexSection:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      borderRight:'1px solid #cecece',
      borderBottom:'1px solid #cecece',
      marginLeft:'5vw',
    },
    contactField: {
      minWidth: 512,
      maxWidth: '60vw',
      margin:'2rem 0'
    },
    fieldGrid: {
      width: '50vw'
    },
    linkedInBtn: {
      position: 'fixed !important',
      bottom: '8vw',
      right: '2vw',
      zIndex:99,
      borderRadius:'50%',
      boxShadow:'2px 2px 3px #cecece',
      display:'flex',
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      height:'4vw',
      width:'4vw',
    },
    githubBtn: {
      position: 'fixed !important',
      bottom: "2vw",
      zIndex:99,
      right: '2vw',
      borderRadius:'50%',
      backgroundColor:'white',
      boxShadow:'2px 2px 3px #cecece',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'4vw',
      width:'4vw',
    },
  
  });
  // mobile styles
  const useMobileStyles = makeStyles({
    main: {
      display:'grid',
      // gridTemplateColumns:'40vw 60vw',
      // gridTemplateRows:'repeat(7, 1fr)',
      gridTemplateRows: '512px 840px 740px 840px 1740px 1840px 840px',
      paddingLeft:"4vw",
      overflow: 'hidden',
      scrollBehavior:'smooth',
    },
    profileImageContainer: {
      backgroundColor:'black',
      marginLeft:'-10vw',
      // gridColumn:'0',
      // gridRowEnd:'span 6',
    },
    portSection: {
      minHeight: '40vh',
      padding: '0vh 5vh',
      marginBottom: '5vh',
    },
    sectionItem: {
      minWidth: '30vw',
      maxWidth: '70vw'
    },
    eduTitle: {
      display: 'flex',
      alignItems: 'center',
      minWidth: '70vw',
      color:'#6288d5'
    },
    sectionTitle:{
      fontSize:'4rem',
      fontFamily:'Poppins',
      fontWeight:700,
      lineHeight:'3rem'
    },
    sectionSubtitle:{
      fontFamily:'Poppins',
      fontSize:'1.5rem',
      fontWeight:500,
      color:'#0080ff',
      marginTop:'-24px'
    },
    sectionDescription:{
      fontFamily:'Poppins',
      fontSize:'1.1rem',
      textDecoration:'none',
      color:'black',
      width:'60%'
    },
    contactCTA:{
      width:148,
      height:'4rem',
      textAlign:'center',
      fontFamily:'Poppins',
      fontWeight:700,
      fontSize:'1rem',
      color:'#0080ff',
      border:'1px solid #0080ff',
      borderRadius:'30px',
      backgroundColor:'white',
      display:'inline',
      cursor:'pointer',
      textDecoration:'none'
    },
    downwardPointer:{
      border:'2px solid #cecece',
      borderRadius:30,
      height:'4rem',
      width:54,
      marginLeft:'10vw',
      cursor:'pointer',
      backgroundColor:'white'
    },
    animatedPointer:{
      // marginLeft:'-4px',
      width:27,
      height:18,
      backgroundColor:'#3e3e3e',
      clipPath: 'polygon(50% 50%, 100% 30%, 50% 100%, 0 30%)',
      animation: '$mouseAnim 1s infinite',
      transform: 'rotate(-45deg)',
    },
    "@keyframes mouseAnim":{
      "0%":   { transform: "translateX(12px) translateY(16px)" },
      "50%":  { transform: "translateX(12px) translateY(24px)" },
      "100%": { transform: "translateX(12px) translateY(16px)"},
    },
    indexSection:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      borderRight:'1px solid #cecece',
      borderBottom:'1px solid #cecece',
      marginLeft:'5vw',
    },
    contactField: {
      minWidth: 512,
      maxWidth: '60vw',
      margin:'2rem 0'
    },
    fieldGrid: {
      width: '50vw'
    },
    linkedInBtn: {
      position: 'fixed !important',
      bottom: '16vw',
      right: '4vw',
      zIndex:99,
      color:'#0080ff',
      borderRadius:'50%',
      boxShadow:'2px 2px 3px #cecece',
      display:'flex',
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      height:'4vw',
      width:'4vw',
    },
    githubBtn: {
      position: 'fixed !important',
      bottom: "4vw",
      zIndex:99,
      right: '4vw',
      borderRadius:'50%',
      backgroundColor:'white',
      boxShadow:'2px 2px 3px #cecece',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'4vw',
      width:'4vw',
    },
  });

  export {useStyles, useMobileStyles}