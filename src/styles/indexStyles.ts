import { makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles({
    main: {
      overflow: 'hidden',
    },
    subtitle: {
      color:'#6288d5',
      margin:'4rem 0'
    },
    profileImage: {
      position: 'absolute !important',
      top: 0,
      left: 0,
      height:'80%',
      borderRadius:'10px',
      marginTop:'5%',
      marginLeft:'2vw',
      maxHeight:'100%'
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
      bottom: 196,
      right: '1vw',
      zIndex:99,
      // overflowY: 'scroll',
      overflowX: 'hidden'
    },
    githubBtn: {
      position: 'fixed !important',
      bottom: 64,
      zIndex:99,
      right: '1vw',
      // overflowY: 'scroll',
      overflowX: 'hidden'
    },
    leftArrowBtns: {
      position: 'absolute',
      right: '64px',
      top: '64px'
    },
    rightArrowBtns: {
      position: 'absolute',
      right: '128px',
      top: '64px'
    },
    sectionHead: {
      fontWeight: 'bold'
    },
    projectList: {
      minWidth: '70vw'
    },
    projectCard: {
      width: '196px'
    },
    wheel:{
      animation:'$scroll ease 2s infinite'
    },
    '@keyframes scroll':{
      '0%':{
        transform:'translate(0px, 0px)'
      },
      '30%':{
        transform:'translate(0px, 10px)'
      }
    },
    eduPaper:{
      backgroundImage:"url('../images/BackyardFar.jpg')"
    },
    profileImg:{

    }
  });
  // mobile styles
  const useMobileStyles = makeStyles({
    main: {
      overflow: 'hidden',
    },
    subtitle: {
      padding:'24px 0',
      color:'#6288d5',
    },
    profileImage: {
      width: '90%',
      maxWidth:'320px',
      margin:'2vh 5%',
      maxHeight:'40vh',
      overflow: 'hidden',
      borderRadius:'10px'
    },
    portSection: {
      minHeight: '512px',
      width: '100%',
      margin: '1rem 0',
      padding: '1rem'
    },
    sectionItem: {
      // minWidth: '70vw',
      marginRight: 0,
      paddingRight: 0
    },
    eduTitle: {
      display: 'flex',
      alignItems: 'center',
      minWidth: '70vw'
    },
    contactField: {
      minWidth: 302,
      maxWidth: '80vw',
      margin:'2rem 0'
    },
    fieldGrid: {
      width: '50vw'
    },
    linkedInBtn: {
      display: 'none'
    },
    githubBtn: {
      display: 'none'
    },
    leftArrowBtns: {
      position: 'absolute',
      right: '10vw',
      bottom: '36px'
    },
    rightArrowBtns: {
      position: 'absolute',
      right: '30vw',
      bottom: '36px'
    },
    sectionHead: {
      minWidth: '30vw',
      // maxWidth: '70vw',
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    wheel:{
      animation:'$scroll ease 2s infinite'
    },
    '@keyframes scroll':{
      '0%':{
        transform:'translate(0px, 0px)'
      },
      '30%':{
        transform:'translate(0px, 15px)'
      }
    },
    eduPaper:{
      backgroundImage:"url('../images/BackyardFar.jpg')"
    },
    profileImg:{
      height: '248px',
      width: '100%',
      borderRadius: '10px',
      border: '5px solid #006064',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '110%',
      backgroundPosition: '10% 30%',
      // transform: 'rotate(-10deg)'
    }
  });

  export {useStyles, useMobileStyles}