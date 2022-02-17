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
        <p
          style={{ color: '#0080ff', fontFamily: 'Poppins', fontSize: '1rem' }}
        >
          Hi, my name is
        </p>
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
        I'm a software developer that focueses on web applications. I use React
        and Node with Typescipt daily, to create digital experiences for the
        modern web.
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
