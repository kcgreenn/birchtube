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
      <p className={classes.sectionDescription}> Hey there! My name is KC</p>
    </section>
  );
}
