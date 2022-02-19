import React, { useEffect, useState } from 'react';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from '../components/portfolio/PortfolioStyles.module.css';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Seo from '../components/seo';
import * as IndexStyles from '../styles/Index.module.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useMediaQuery } from '@react-hook/media-query';

export default function ProjectSection(): JSX.Element {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

  return (
    <Layout>
      <Seo
        description="A selection of development projects that I have worked on in the past."
        lang="en-US"
        title="My Projects"
      />
      <a
        className={IndexStyles.linkedInBtn}
        href="https://www.linkedin.com/in/kyle-g-81b3b71a1/"
        target="_blank"
      >
        <LinkedInIcon style={{ color: '#0080ff' }} />
      </a>
      <a
        className={IndexStyles.githubBtn}
        href="https://www.github.com/kcgreenn"
        target="_blank"
      >
        <GitHubIcon style={{ color: '#0080ff' }} />
      </a>
      <div className={IndexStyles.main}>
        <div
          className={IndexStyles.profileImageContainer}
          style={{
            width: '10vw',
            backgroundColor: '#0080ff'
          }}
        ></div>
        <section
          className={IndexStyles.indexSection}
          style={{
            marginLeft: '-10vw',
            paddingRight: '30vw',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'flex-end'
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
          {/* <a href="/"> */}
          <button
            onClick={() => navigate('/')}
            className={IndexStyles.contactCTA}
          >
            Back
          </button>
          {/* </a> */}
        </section>
      </div>
    </Layout>
  );
}
