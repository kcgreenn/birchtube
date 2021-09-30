import { makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles({
    main: {
      paddingTop: '5rem',
      marginLeft: '15vw',
      paddingLeft: '10vw',
      maxWidth: '80vw',
      overflowX: 'hidden'
    },
    subtitle: {
      // color: '#001AFF',
      minWidth: '70vw'
    },
    profileImage: {
      position: 'fixed !important',
      top: 0,
      left: 0,
      width: '15vw',
      height: '100vh',
      float: 'left',
      overflowY: 'scroll',
      overflowX: 'hidden'
    },
    profileImgCntnr: {
      overflow: 'hidden'
    },
    portSection: {
      borderBottom: '1px solid #ccc',
      borderRight: '1px solid #ccc',
      width: '70vw',
      minHeight: 640,
      margin: 0,
      padding: 0
    },
    sectionItem: {
      minWidth: '30vw',
      maxWidth: '70vw'
    },
    eduTitle: {
      display: 'flex',
      alignItems: 'center',
      minWidth: '70vw'
    },
    contactField: {
      minWidth: 512,
      maxWidth: '60vw'
    },
    fieldGrid: {
      width: '50vw'
    },
    linkedInBtn: {
      position: 'fixed !important',
      bottom: 196,
      right: '1vw',
      // overflowY: 'scroll',
      overflowX: 'hidden'
    },
    githubBtn: {
      position: 'fixed !important',
      bottom: 64,
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
      minWidth: '30vw',
      maxWidth: '70vw',
      fontSize: '4rem',
      fontWeight: 'bold'
    },
    projectCarousel: {
      maxWidth: '100vw',
      // background: "rgb(255,255,255)",
      zIndex: 1,
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      '&::after': {
        content: '""',
        display: 'block',
        zIndex: 999,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '60vw',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.29735644257703087) 62%, rgba(255,255,255,1) 90%)'
      }
    },
    projectList: {
      minWidth: '70vw'
    },
    projectCard: {
      width: '196px'
    }
  });
  // mobile styles
  const useMobileStyles = makeStyles({
    main: {
      paddingTop: '0rem',
      marginRight: 0,
      paddingRight: 0,
      paddingLeft: '5vw',
      maxWidth: '100vw',
      // minHeight: '195vh'
      overflowX: 'hidden'
    },
    subtitle: {
      // color: '#001AFF',
      padding:'24px 0'
    },
    profileImage: {
      width: '100vw',
      height: '30vh',
      margin: 0,
      padding: 0,
      height: 'auto',
      objectFit: 'none',
      objectPosition: 'bottom',
      overflow: 'hidden'
    },
    profileImgCntnr: {
      margin: 0,
      padding: 0,
      marginTop: '5vh',
      maxWidth: '100vw',
      minHeight: '128px',
      maxHeight: '60vh',
      overflow: 'hidden'
    },
    portSection: {
      borderBottom: '1px solid #ccc',
      minHeight: '90vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      paddingLeft: '5vw'
    },
    sectionItem: {
      minWidth: '70vw',
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
      maxWidth: '80vw'
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
      maxWidth: '70vw',
      fontSize: '3rem',
      fontWeight: 'bold'
    },
  });

  export {useStyles, useMobileStyles}