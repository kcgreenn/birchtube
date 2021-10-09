import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useMobileStyles, useStyles } from '../styles/indexStyles';
import mockupImg from '../images/mockup.png';
import * as portfolioStyles from '../components//portfolio/PortfolioStyles.module.css';
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import Layout from '../components/Layout/Layout';
import { ExpandLessSharp } from '@material-ui/icons';
import Seo from '../components/seo';

export default function ContactSection({ ref }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:600px');
  const convertedBgImg = convertToBgImage(mockupImg);

  const [success, setSuccess] = useState(false);
  const [inputState, setinputState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = (e) => {
    setinputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputState.name && inputState.email && inputState.message) {
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...inputState })
        });
        setSuccess(true);
      } catch {
        alert('Error');
      }
    } else {
      setSuccess(false);
      alert('All fields are required.');
    }
  };

  return (
    <Layout>
      <Seo
        description="If you would like to get in touch with me, you can use this form."
        lang="en-US"
        title="Contact Me"
      />
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          style={{ color: 'white' }}
          align="right"
        >
          Contact
        </Typography>
        {success && (
          <Typography
            variant="h5"
            align="center"
            style={{
              color: '#dedede',
              borderBottom: '1px solid green',
              borderRadius: '10px',
              padding: '1rem'
            }}
          >
            Thanks for your message! I'll try to get back to you as soon as
            possible.
          </Typography>
        )}
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
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  required
                  onChange={handleChange}
                  id="name"
                  name="name"
                  className={portfolioStyles.contactField}
                ></TextField>
                <TextField
                  label="Email"
                  variant="outlined"
                  id="email"
                  fullWidth
                  required
                  onChange={handleChange}
                  name="email"
                  className={portfolioStyles.contactField}
                ></TextField>
                <TextField
                  label="Message"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  id="message"
                  fullWidth
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
                  onClick={(e) => handleSubmit(e)}
                >
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
}
