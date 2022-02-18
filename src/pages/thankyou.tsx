import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from '../components/portfolio/PortfolioStyles.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Seo from '../components/seo';
import { useMobileStyles, useStyles } from '../styles/indexStyles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function ProjectSection(): JSX.Element {
  const matches = useMediaQuery('(min-width:821px)');
  const classes = matches ? useStyles() : useMobileStyles();

  return (
    <Layout>
      <Seo
        description="A selection of development projects that I have worked on in the past."
        lang="en-US"
        title="My Projects"
      />
      <a
        className={classes.linkedInBtn}
        href="https://www.linkedin.com/in/kyle-g-81b3b71a1/"
        target="_blank"
      >
        <LinkedInIcon style={{ color: '#0080ff' }} />
      </a>
      <a
        className={classes.githubBtn}
        href="https://www.github.com/kcgreenn"
        target="_blank"
      >
        <GitHubIcon style={{ color: '#0080ff' }} />
      </a>
      <div className={classes.main}>
        <div
          className={classes.profileImageContainer}
          style={{
            width: '10vw',
            backgroundColor: '#0080ff'
          }}
        ></div>
        <section
          className={classes.indexSection}
          style={{
            marginLeft: '-10vw',
            paddingRight: '30vw',
            textAlign: 'center'
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '1.5rem',
              fontWeight: 700
            }}
          >
            Thanks for reaching out. I'll get back to you as soon as I can
            &#128512;
          </h2>
        </section>
      </div>
    </Layout>
  );
}
