import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles({
  footer: {
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #cecece',
    marginTop: '5vh',
    paddingLeft: '15vw'
  }
});

function Footer() {
  const matches = useMediaQuery('(min-width:800px)');
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          publishedYear
        }
      }
    }
  `);
  return (
    <footer style={{ background: '#37474f' }}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem 0',
          color: '#37474f'
        }}
      >
        {matches ? (
          <a href="https://github.com/kcgreenn/birchtube">
            <Typography variant="body1" style={{ color: '#ccc' }}>
              Built By&nbsp;{data.site.siteMetadata.author}&nbsp;-&nbsp;
              {data.site.siteMetadata.publishedYear}&nbsp; All Rights Reserved
            </Typography>
          </a>
        ) : (
          <>
            <Typography variant="body1" style={{ color: '#ccc' }}>
              Built By&nbsp;{data.site.siteMetadata.author}&nbsp;-&nbsp;
              {data.site.siteMetadata.publishedYear}&nbsp; All Rights Reserved
            </Typography>
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
          </>
        )}
      </Container>
    </footer>
  );
}

export default Footer;
