import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  footer: {
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #cecece',
    marginTop: '5vh'
  }
});

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Container className={classes.footer}>
        <Typography>&copy; 2021 KC Green All Rights Reserved</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <IconButton
            color="primary"
            component="a"
            href="https://github.com/kcgreenn"
            title="My Github Profile"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="https://linkedin.com"
            title="My LinkedIn Profile"
          >
            <LinkedInIcon />
          </IconButton>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
