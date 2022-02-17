import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import landscapeImg from '../../images/BackyardFar.jpg';

export default function AboutSection() {
  const matches = useMediaQuery('(min-width:821px');
  const classes = matches ? useStyles() : useMobileStyles();
  return (
    <section id="aboutSection" className={classes.indexSection}>
      <div>
        <h2 className={classes.sectionTitle}>
          <span>About</span>
          <br />
          <span>Me</span>
        </h2>
        <h3 className={classes.sectionSubtitle}>My Story</h3>
      </div>
      <p className={classes.sectionDescription}>
        {' '}
        Hey there! My name is KC. I'm a curious software developer who's trying
        to get a bit better everyday. In my free time, I love to exercise, watch
        baseball and read sci-fi novels.
      </p>
      <p style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
        <span style={{ color: '#0080ff', fontWeight: 700 }}>Residence: </span>{' '}
        The Greater Philadelphia Area
      </p>
      <p style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
        <span style={{ color: '#0080ff', fontWeight: 700 }}>Email: </span>{' '}
        kyle@kcgreen.dev
      </p>
      <p style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
        <span style={{ color: '#0080ff', fontWeight: 700 }}>Freelance: </span>{' '}
        Available
      </p>
    </section>
  );
}
