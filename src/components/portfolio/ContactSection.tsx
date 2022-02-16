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
import { BgImage, convertToBgImage } from 'gbimage-bridge';

export default function ContactSection({ ref }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:821px');
  const classes = matches ? useStyles() : useMobileStyles();
  const convertedBgImg = convertToBgImage(mockupImg);

  return (
    <section id="contactSection" className={classes.indexSection}>
      <div>
        <h2 className={classes.sectionTitle} style={{ lineHeight: '3.5rem' }}>
          <span>Contact</span>
        </h2>
        <h3 className={classes.sectionSubtitle}>Get In Touch</h3>
      </div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
        name="Contact Form"
        method="POST"
        content-type="application/x-www-form-urlencoded"
        data-netlify="true"
        action="javascript:void(0);"
      >
        <input type="hidden" name="Contact Form" value="Contact Form" />
        <span className={portfolioStyles.contactFieldLabel}>
          <label className={portfolioStyles.contactFieldLabel} for="name">
            Name
          </label>
        </span>
        <input
          id="name"
          type="text"
          className={portfolioStyles.contactField}
          name="name"
        ></input>
        <span className={portfolioStyles.contactFieldLabel}>
          <label className={portfolioStyles.contactFieldLabel} for="email">
            Email
          </label>
        </span>
        <input
          id="email"
          type="email"
          className={portfolioStyles.contactField}
          name="email"
        ></input>
        <span className={portfolioStyles.contactFieldLabel}>
          <label className={portfolioStyles.contactFieldLabel} for="message">
            Message
          </label>
        </span>
        <textarea
          id="message"
          name="message"
          rows="10"
          cols="50"
          className={portfolioStyles.contactField}
          style={{
            height: '10rem',
            paddingTop: '18px'
          }}
        ></textarea>
        <button
          type="submit"
          name="Submit Button"
          className={portfolioStyles.contactBtn}
          style={{ color: '#0080ff', borderColor: '#0080ff' }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

{
  /* <React.Fragment>
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
      style={{
        backgroundImage: 'url(../../images/mockup.png)',
        backgroundSize: 'cover'
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
  </Grid>
</Paper>
</React.Fragment> */
}
