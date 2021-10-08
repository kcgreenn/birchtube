import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';
import mockupImg from '../../images/mockup.png';
import * as portfolioStyles from './PortfolioStyles.module.css';

export default function ContactSection({ ref }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:800px');
  const classes = matches ? useStyles() : useMobileStyles();

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        style={{ color: 'white' }}
        align="right"
      >
        Contact
      </Typography>
      <Paper className={portfolioStyles.portSection}>
        <Grid
          id="contact"
          ref={ref}
          container
          justifyContent="flex-end"
          alignItems="stretch"
          component="form"
          style={{ minHeight: '50vh' }}
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
            <form
              name="Contact Form"
              method="POST"
              content-type="application/x-www-form-urlencoded"
              data-netlify="true"
              action="javascript:void(0);"
            >
              <input type="hidden" name="Contact Form" value="Contact Form" />
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                required
                id="name"
                name="name"
                className={portfolioStyles.contactField}
              ></TextField>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                id="email"
                name="email"
                className={portfolioStyles.contactField}
              ></TextField>
              <TextField
                label="Message"
                variant="outlined"
                required
                fullWidth
                id="message"
                name="message"
                className={portfolioStyles.contactField}
                multiline
                rows={6}
              ></TextField>
              <Button
                name="Submit Button"
                className={portfolioStyles.contactField}
                type="submit"
                variant="contained"
                fullWidth
                color="secondary"
              >
                Send Message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={5} style={{ minHeight: '30vh' }}>
            <Card style={{ height: '100%', width: '100%', boxShadow: 'none' }}>
              <CardMedia
                image={mockupImg}
                title="Email Mockup"
                style={{
                  height: '40%',
                  width: '90%',
                  marginTop: '30%',
                  transform: 'rotate(30deg)'
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
