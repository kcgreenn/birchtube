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
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import * as portfolioStyles from './PortfolioStyles.module.css';
import ProfileImage from '../../images/profileImg.jpeg';

type AppProps = {
  profileImage: any;
};

export default function IntroSection({ profileImage }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:600px');

  return (
    <React.Fragment>
      <Typography variant="body2" style={{ color: 'white', marginTop: '8px' }}>
        Site By
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        style={{ color: 'white', margin: '0 0 1rem 0' }}
        align="left"
      >
        KC Green
      </Typography>
      <Typography variant="h5" style={{ color: 'white', margin: '1rem 0' }}>
        Developer, Designer, Writer
      </Typography>
      <a href="https://twitter.com/KCGreen90088864" alt="My Twitter">
        <Typography
          variant="body2"
          component="span"
          style={{ color: 'white', margin: '1rem 0' }}
        >
          @KCGreen
        </Typography>
      </a>
      <a href="https://github.com/kcgreenn" alt="My Github">
        <Typography
          variant="body2"
          component="span"
          style={{ color: 'white', margin: '1rem' }}
        >
          github.com/kcgreenn
        </Typography>
      </a>
      <Grid container style={{ color: 'white', padding: '4rem 0' }}>
        <Grid item xs={12} md={4}>
          <img
            src={ProfileImage}
            alt="Profile Image"
            style={{
              height: '280',
              width: '100%',
              borderRadius: '160px',
              backgroundColor: '#333'
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" align="right">
            Hi, I'm KC. I design and build websites and applications. I have a
            focus on the React ecosystem, including Nextjs, Gatsby and React
            Native.
          </Typography>
          <Button
            style={{ marginTop: '2rem', float: 'right' }}
            component="a"
            fullWidth={matches ? false : true}
            href="/contact"
            color="secondary"
            variant="contained"
          >
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
