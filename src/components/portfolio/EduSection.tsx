import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import * as portfolioStyles from './PortfolioStyles.module.css';

export default function EduSection() {
  const matches = useMediaQuery('(min-width:821px');
  const classes = matches ? useStyles() : useMobileStyles();

  const educationItems = [
    {
      school: 'Western Governors University',
      years: '2020 - 2021',
      description: 'Attained a Bachelors in Compunter Science',
      awards: ['Inducted into the NSLS Honor Society']
    },
    {
      school: 'Community College of Philadelphia',
      years: '2017 - 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas suscipit exercitationem laboriosam, recusandae veritatis nemo! Et ad eos odit amet ratione expedita officiis dolorum.',
      awards: []
    }
  ];

  const educationGroup = educationItems.map((item, index) => (
    <div
      id="eduCard"
      style={{ width: '40%', minWidth: '312px', marginRight: '5%' }}
    >
      <div id="header">
        <span
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            color: '#0080ff',
            float: 'left',
            fontFamily: 'Poppins',
            fontSize: '.75rem'
          }}
        >
          {item.years}
        </span>
        <h3
          style={{
            textAlign: 'right',
            fontSize: '1.5rem',
            fontFamily: 'Poppins'
          }}
        >
          {item.school}
        </h3>
      </div>
      <p style={{ textAlign: 'left', fontFamily: 'Poppins', fontSize: '1rem' }}>
        {item.description}
      </p>
      {item.awards.length > 0 && (
        <React.Fragment>
          <h4 style={{ textDecoration: 'underline', fontFamily: 'Poppins' }}>
            Awards Attained / Achievements
          </h4>
          <ul style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
            <li>{item.awards[0]}</li>
          </ul>
        </React.Fragment>
      )}
    </div>
  ));

  return (
    <section id="eduSection" className={classes.indexSection}>
      <div>
        <h2 className={classes.sectionTitle}>
          <span>Education</span>
        </h2>
        <h3 className={classes.sectionSubtitle}>Studied At</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{educationGroup}</div>
    </section>
  );
}
