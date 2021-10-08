import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Fab,
  Paper
} from '@material-ui/core';
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import * as portfolioStyles from './PortfolioStyles.module.css';

type AppProps = {
  profileImage: any;
};

export default function IntroSection(): JSX.Element {
  const matches = useMediaQuery('(min-width:600px');
  const classes = matches ? useStyles() : useMobileStyles();

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        style={{ color: 'white' }}
        align="left"
      >
        KC Green
      </Typography>
      <Paper
        style={{
          position: 'relative'
        }}
      >
        <Grid
          className={portfolioStyles.portSection}
          container
          justifyContent={matches ? 'flex-end' : 'flex-start'}
          alignItems="center"
          style={{
            position: 'relative'
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '50vh',
              minHeight: '256px'
            }}
          >
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/df5cy5c76/image/upload/c_thumb,w_200,g_face/v1633645925/IMG_0022_djdmlm.jpg) !important`,
                minHeight: '200px',
                width: '254px',
                borderRadius: '10px',
                border: '5px solid #37474f',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            />
            <Typography
              variant="h5"
              component="h3"
              style={{ color: '#6288d5' }}
            >
              Residence:{' '}
              <Typography color="textPrimary" component="span" variant="h5">
                Beautiful Chester County, PA!
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ color: '#6288d5' }}
            >
              Email:{' '}
              <Typography component="span" color="textPrimary" variant="h5">
                kyle@kcgreen.dev
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ color: '#6288d5' }}
            >
              Freelance:{' '}
              <Typography component="span" color="textPrimary" variant="h5">
                Available
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              minHeight: '512px'
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              // align={matches ? 'right' : 'left'}
              align="right"
              style={{ color: '#6288d5', margin: matches ? '0' : '1rem 0' }}
            >
              Software Developer
            </Typography>
            <Typography
              component="p"
              variant="body1"
              align={matches ? 'right' : 'justify'}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem aperiam earum ipsa deserunt! Ipsum dolorum ducimus
              quibusdam facilis nesciunt ex. Ipsum saepe reprehenderit fugit
              veritatis provident tempore, libero recusandae quaerat.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component="a"
              href="/#contact"
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
