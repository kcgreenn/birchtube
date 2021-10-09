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

export default function ContactSection({ ref }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:600px');
  const convertedBgImg = convertToBgImage(mockupImg);

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <Layout>
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
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input type="hidden" name="form-name" value="contact" />
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
