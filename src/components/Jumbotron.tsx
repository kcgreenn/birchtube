import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const useStyles = makeStyles({
  jumbotron: {
    height: '50vh',
    position: 'relative',
    marginTop: '10vh'
  },
  jumboImage: {
    maxHeight: '70vh'
  },
  jumboTitle: {
    fontWeight: 700,
    fontSize: '5rem'
  },
  jumboSubtitle: {
    margin: 0,
    padding: 0,
    fontWeight: 500
  },
  svgHolder: {
    maxWidth: '100vw',
    overflow: 'hidden'
  },
  svgBlob: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100vw',
    minWidth: '1360px',
    height: 'auto'
  }
});

const useMobileStyles = makeStyles({
  jumbotron: {
    height: '40vh',
    position: 'relative',
    marginTop: '10vh'
  },
  jumboImage: {
    maxHeight: '70vh'
  },
  jumboTitle: {
    fontWeight: 700,
    fontSize: '5rem'
  },
  jumboSubtitle: {
    margin: 0,
    padding: 0,
    fontWeight: 500
  },
  svgHolder: {
    // position: 'relative',
    width: '100vw',
    padding: 0,
    margin: 0,
    overflow: 'hidden'
  },
  svgBlob: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    padding: 0,
    width: '100vw'
  }
});

export default function Jumbotron() {
  const matches = useMediaQuery('(min-width:800px)');
  const classes = matches ? useStyles() : useMobileStyles();

  const svgThingy = matches ? (
    <svg
      className={classes.svgBlob}
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1013.315"
      viewBox="0 0 1920 1013.315"
    >
      <path
        d="M0,0H1920V313.842S1726.209,934.368,996.736,640.684,0,1013.315,0,1013.315Z"
        fill="#6288d5"
      />
    </svg>
  ) : (
    <svg
      className={classes.svgBlob}
      xmlns="http://www.w3.org/2000/svg"
      width="390.523"
      height="527"
      viewBox="0 0 390.523 527"
    >
      <path
        d="M0,0H390V163.221s18.377,302.327-162.739,229.568S0,527,0,527Z"
        fill="#6288d5"
      />
    </svg>
  );
  return (
    <>
      {svgThingy}
      <Grid container className={classes.jumbotron} justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h1"
            // color="textPrimary"
            className={classes.jumboTitle}
            align="center"
          >
            My Blog
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h2"
            className={classes.jumboSubtitle}
            align="center"
          >
            This Is Where I Collect My Thoughts
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
