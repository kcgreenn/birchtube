import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Img from 'gatsby-image';

type AppProps = {
  title: String;
  subtitle: String;
  image: any;
  titleAlign: String;
};

const useStyles = makeStyles({
  jumbotron: {
    position: 'relative',
    height: '60vh',
    backgroundColor: '#607d8b',
    overflow: 'hidden'
  },
  jumboImage: {
    position: 'relative',
    // marginTop: '6vh',
    minHeight: '540',
    minWidth: '1300px'
  },
  centerJumboTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 700,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  },
  centerJumboSubtitle: {
    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 500,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  },
  leftJumboTitle: {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-30%, -50%)',
    fontWeight: 700,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  },
  leftJumboSubtitle: {
    position: 'absolute',
    top: '75%',
    left: '25%',
    transform: 'translate(-30%, -50%)',
    fontWeight: 500,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  }
});

const useMobileStyles = makeStyles({
  jumbotron: {
    position: 'relative',
    height: '480',
    backgroundColor: '#607d8b',
    overflow: 'hidden'
  },
  jumboImage: {
    position: 'relative',
    paddingTop: '15vh',
    marginTop: '5vh'
  },
  centerJumboTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 700,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  },
  centerJumboSubtitle: {
    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 500,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  },
  leftJumboTitle: {
    position: 'absolute',
    top: '50%',
    left: '0%',
    transform: 'translate(5%, -50%)',
    fontWeight: 700,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  },
  leftJumboSubtitle: {
    position: 'absolute',
    top: '75%',
    left: '0%',
    transform: 'translate(5%, -50%)',
    fontWeight: 500,
    color: '#fefefe',
    textShadow: '2px 2px #333'
  }
});

export default function Jumbotron({
  title,
  subtitle,
  image,
  titleAlign
}: AppProps): JSX.Element {
  const matches = useMediaQuery('(min-width:800px)');
  const classes = matches ? useStyles() : useMobileStyles();

  return (
    <div className={classes.jumbotron}>
      {image && (
        <GatsbyImage image={image} alt={title} className={classes.jumboImage} />
      )}
      <Grid item xs={12}>
        <Typography
          variant="h1"
          component="h1"
          className={
            titleAlign === 'center'
              ? classes.centerJumboTitle
              : classes.leftJumboTitle
          }
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h2"
          className={
            titleAlign === 'center'
              ? classes.centerJumboSubtitle
              : classes.leftJumboSubtitle
          }
        >
          {subtitle}
        </Typography>
      </Grid>
    </div>
  );
}
