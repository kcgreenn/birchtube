import {
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import eduImg from '../../images/WGU_Graduation_Anaheim_2019.jpg';

export default function EduSection() {
  const matches = useMediaQuery('(min-width:800px');
  const classes = matches ? useStyles() : useMobileStyles();

  const educationItems = [
    {
      school: 'Western Governors University',
      years: '2020 - 2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem architecto magni modi laborum repudiandae suscipit impedit, vero a nam veritatis voluptatem error vitae. Eum.',
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
    <>
      <Grid
        item
        xs={12}
        md={1}
        style={{
          borderLeft: matches ? '1px solid #6288d5' : '',
          borderTop: !matches && index % 2 !== 0 ? '3px solid #6288d5' : '',
          paddingTop: !matches && index % 2 !== 0 ? '2rem' : '',
          marginTop: !matches && index % 2 !== 0 ? '2rem' : ''
        }}
      >
        <Typography
          variant="h4"
          component="p"
          className={classes.subtitle}
          style={{
            writingMode: matches ? 'vertical-rl' : ''
          }}
        >
          {item.years}
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        md={5}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingTop: '2rem'
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          align="left"
          style={{
            height: '48px',
            marginBottom: '24px',
            fontWeight: 'bold'
          }}
        >
          {item.school}
        </Typography>
        <Typography
          component="p"
          variant="body1"
          style={{ padding: '24px 12px 0 0' }}
        >
          {item.description}
        </Typography>
        {item.awards.length > 0 && (
          <>
            <Typography
              variant="h5"
              component="h2"
              className={classes.subtitle}
            >
              Awards Attained:
            </Typography>
            {item.awards.map((award) => (
              <Typography component="li" variant="body1">
                {award}
              </Typography>
            ))}
          </>
        )}
      </Grid>
    </>
  ));

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        style={{ color: 'white' }}
        align="right"
      >
        Education
      </Typography>
      <Paper
        style={{
          paddingBottom: '1rem',
          minHeight: '40vh'
        }}
        className={classes.portSection}
      >
        <Grid container justifyContent="center" alignItems="center">
          {educationGroup}
        </Grid>
      </Paper>
    </>
  );
}
