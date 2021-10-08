import { Container, Fab, useMediaQuery } from '@material-ui/core';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby-theme-material-ui';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import { useStyles, useMobileStyles } from '../styles/indexStyles';

import EduSection from '../components/portfolio/EduSection';
import AboutSection from '../components/portfolio/AboutSection';
import ProjectSection from '../components/portfolio/ProjectSection';
import IntroSection from '../components/portfolio/IntroSection';
import ContactSection from '../components/portfolio/ContactSection';
import Jumbotron from '../components/Jumbotron';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type AppProps = {
  location: any;
  data: any;
};

// markup
export default function Index({ location, data }: AppProps): JSX.Element {
  const matches = useMediaQuery('(min-width:1000px)');
  const maxImgWidth = matches ? 1000 : 400;
  const projectData = useStaticQuery(graphql`
    query {
      allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
        totalCount
        edges {
          node {
            id
            title
            description
            githublink
            livelink
            image {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const hash = location.hash;

  const projectRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();

  const classes = matches ? useStyles() : useMobileStyles();

  if (hash === '#portfolio') {
    if (projectRef && projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  } else if (hash === '#about') {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else if (hash === '#contact') {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <Layout>
      <Fab
        component="a"
        href="https://www.linkedin.com/in/kyle-green-81b3b71a1/"
        title="LinkedIn"
        color="secondary"
        aria-label="My LinkedIn"
        className={classes.linkedInBtn}
      >
        <LinkedInIcon />
      </Fab>
      <Fab
        component="a"
        href="https://github.com/kcgreenn"
        title="My Github"
        color="secondary"
        aria-label="github"
        className={classes.githubBtn}
      >
        <GitHubIcon />
      </Fab>
      <Container className={classes.main}>
        <IntroSection />
        <EduSection />
        <ProjectSection projects={projectData.allContentfulProject.edges} />
        <ContactSection id="contact" />
      </Container>
    </Layout>
  );
}
