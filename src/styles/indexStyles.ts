import { makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles({
    main: {
      display:'flex',
      flexDirection:'column',
      overflow: 'hidden',
      scrollBehavior:'smooth',
      padding:'15vh 5vw 7vh 35vw'
    },
    subtitle: {
      // color:'#6288d5',
      color:'black',
      margin:'4rem 0'
    },
    profileImageContainer: {
      backgroundColor:'black',
      // gridColumn:'0',
      // gridRowEnd:'span 6',
    },
    portSection: {
      minHeight: '40vh',
      padding: '5vh',
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
      border:'1px solid #0080ff',
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
      backgroundColor:'#0080ff',
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
      padding:'5vh 0',
      minHeight:'80vh'
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
      display:'flex',
      flexDirection:'column',
      paddingLeft:"4vw",
      overflow: 'hidden',
      scrollBehavior:'smooth',
      paddingTop:'75vh'
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
      width:'90%'
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

      display:'none',

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
      padding:'5vh 0'
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