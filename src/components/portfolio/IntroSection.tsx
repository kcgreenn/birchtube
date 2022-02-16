import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Fab,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import * as portfolioStyles from './PortfolioStyles.module.css';
import ProfileImage from '../../images/profileImg.jpeg';
import ReactRotatingText from 'react-rotating-text';

type AppProps = {
  profileImage: any;
};

export default function IntroSection({ profileImage }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:821px');
  const classes = matches ? useStyles() : useMobileStyles();

  return (
    <section id="introSection" className={classes.indexSection}>
      <div>
        <h2 className={classes.sectionTitle}>
          <span>KC</span>
          <br />
          <span>Green</span>
        </h2>
        <ReactRotatingText
          style={{ color: '#0080ff' }}
          className={classes.sectionSubtitle}
          items={['Developer', 'Designer', 'Data Engineer']}
        />
      </div>
      <p className={classes.sectionDescription}>
        {' '}
        Hi, I'm KC. I design and build websites and applications. I have a focus
        on the React ecosystem, including Nextjs, Gatsby and React Native.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <a href="#contactSection" style={{ textDecoration: 'none' }}>
          <button className={classes.contactCTA}>Contact Me</button>
        </a>
        <a href="#aboutSection" className={classes.downwardPointer}>
          <div className={classes.animatedPointer}></div>
        </a>
      </div>
    </section>
  );
}
