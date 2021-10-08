import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import landscapeImg from '../../images/BackyardFar.jpg';

export default function AboutSection() {
  const matches = useMediaQuery('(min-width:800px');
  const classes = matches ? useStyles() : useMobileStyles();
  return (
    <>
      <Typography variant="h2" component="h2" style={{ color: 'white' }}>
        About Me
      </Typography>
      <Paper>
        <Grid
          container
          id="about"
          justifyContent="flex-start"
          className={classes.portSection}
        >
          <Grid
            item
            xs={12}
            md={7}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}
          >
            <Typography component="p" className={classes.sectionItem}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem aperiam earum ipsa deserunt! Ipsum dolorum ducimus
              quibusdam facilis nesciunt ex. Ipsum saepe reprehenderit fugit
              veritatis provident tempore, libero recusandae quaerat.
            </Typography>
            {!matches && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  paddingLeft: '8px',
                  minHeight: '30vh',
                  backgroundImage: `url(${landscapeImg}) !important`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '200%',
                  backgroundPosition: 'cover',
                  borderRadius: '10px'
                }}
              >
                <Typography
                  // className={classes.subtitle}
                  variant="h5"
                  component="h3"
                  color="secondary"
                >
                  Residence:{' '}
                  <Typography
                    color="textPrimary"
                    component="span"
                    variant="h5"
                    style={{ paddingRight: '24px', color: 'white' }}
                  >
                    Beautiful Chester County PA
                  </Typography>
                </Typography>
                <Typography
                  // className={classes.subtitle}
                  variant="h5"
                  component="h3"
                  color="secondary"
                >
                  Email:{' '}
                  <Typography
                    component="span"
                    color="textPrimary"
                    variant="h5"
                    style={{ color: 'white' }}
                  >
                    kyle@kcgreen.dev
                  </Typography>
                </Typography>
                <Typography
                  // className={classes.subtitle}
                  variant="h5"
                  component="h3"
                  color="secondary"
                >
                  Freelance:{' '}
                  <Typography
                    component="span"
                    color="textPrimary"
                    variant="h5"
                    style={{ color: 'white' }}
                  >
                    Available
                  </Typography>
                </Typography>
              </div>
            )}
          </Grid>
          {matches && (
            <Grid
              item
              xs={12}
              md={5}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                minHeight: '75%',
                borderLeft: '1px solid #cecece',
                margin: '24px 0',
                paddingLeft: '12px',
                backgroundImage: `url(${landscapeImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '200%',
                backgroundPosition: 'cover',
                borderRadius: '10px'
              }}
            >
              <Typography
                className={classes.subtitle}
                variant="h5"
                component="h3"
                style={{ fontWeight: 700 }}
                color="secondary"
              >
                Residence:{' '}
                <Typography
                  color="textPrimary"
                  component="span"
                  variant="h5"
                  style={{
                    paddingRight: '24px',
                    fontWeight: 700,
                    color: 'white',
                    textShadow: '2px 2px #333'
                  }}
                >
                  The Greater Philadelphia Area
                </Typography>
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="h5"
                style={{ fontWeight: 700 }}
                component="h3"
                color="secondary"
              >
                Email:{' '}
                <Typography
                  component="span"
                  variant="h5"
                  style={{
                    fontWeight: 700,
                    color: 'white',
                    textShadow: '2px 2px #333'
                  }}
                >
                  kyle@kcgreen.dev
                </Typography>
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="h5"
                style={{ fontWeight: 700 }}
                component="h3"
                color="secondary"
              >
                Freelance:{' '}
                <Typography
                  component="span"
                  color="textPrimary"
                  variant="h5"
                  style={{
                    fontWeight: 700,
                    color: 'white',
                    textShadow: '2px 2px black'
                  }}
                >
                  Available
                </Typography>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  );
}
