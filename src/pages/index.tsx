import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import * as IndexStyles from '../styles/Index.module.css';
import EduSection from '../components/portfolio/EduSection';
import AboutSection from '../components/portfolio/AboutSection';
import ProjectSection from '../components/portfolio/ProjectSection';
import IntroSection from '../components/portfolio/IntroSection';
import SkillSection from '../components/portfolio/SkillsSection';
import ContactSection from '../components/portfolio/ContactSection';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

type AppProps = {
  location: any;
  data: any;
};

// markup
export default function Index({ location, data }: AppProps): JSX.Element {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const [matches, setMatches] = useState(true);

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    setMatches(821 <= screenSize.dynamicWidth);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
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

  return (
    <Layout>
      <Seo
        description="A brief introduction to myself and my professional activities."
        lang="en-US"
        title="About Me"
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
      {matches ? (
        <React.Fragment>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '35vw',
              height: '100vh',
              background:
                'radial-gradient(rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.67) 80%',
              zIndex: 99
            }}
          ></div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '35vw',
              height: '100vh'
            }}
          >
            <StaticImage
              src="https://res.cloudinary.com/df5cy5c76/image/upload/v1645302477/mobileProfile_qg2zq2.jpg"
              alt="Myself"
              placeholder="blurred"
              style={{
                height: '100%',
                width: 'auto'
              }}
            />
          </div>
        </React.Fragment>
      ) : (
        <div
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 1,
            left: 0,
            width: '100vw',
            height: '512px'
          }}
        >
          <StaticImage
            src="https://res.cloudinary.com/df5cy5c76/image/upload/v1645302406/profileImg_qsf2qn.jpg"
            alt="My Picture"
            placeholder="blurred"
            style={{
              height: '512px',
              width: 'auto'
            }}
          />
        </div>
      )}
      <div className={IndexStyles.main}>
        <div className={IndexStyles.profileImageContainer}></div>
        <IntroSection />
        <AboutSection />
        <EduSection />
        <SkillSection />
        <ProjectSection projects={projectData.allContentfulProject.edges} />
        <ContactSection />
        <div></div>
      </div>
    </Layout>
  );
}
