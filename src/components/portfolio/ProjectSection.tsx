import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from './PortfolioStyles.module.css';
import * as IndexStyles from '../../styles/Index.module.css';

export default function ProjectSection({ projects }: any): JSX.Element {
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

  const projectGroup = projects.map(({ node }: any, index: number) => {
    const projImg = getImage(node.image.gatsbyImageData);
    return (
      <div className={portfolioStyles.projImgHover}>
        <h3>{node.title}</h3>
        <span className={portfolioStyles.projLinks}>
          {node.livelink && (
            <a
              href={node.livelink}
              target="_blank"
              className={portfolioStyles.liveLink}
            >
              <WebIcon size="large" />
            </a>
          )}
          <a
            href={node.githublink}
            target="_blank"
            className={portfolioStyles.githubLink}
          >
            <GitHubIcon size="large" />
          </a>
        </span>
        <a href={node.livelink} target="_blank">
          <GatsbyImage
            image={projImg}
            title={node.description}
            className={portfolioStyles.projectCard}
            style={{ borderRadius: '10px' }}
          />
        </a>
      </div>
    );
  });
  return (
    <section id="projectSection" className={IndexStyles.indexSection}>
      <div>
        <h2 className={IndexStyles.sectionTitle}>
          <span>My</span>
          <br />
          <span>Projects</span>
        </h2>
        <h3 className={IndexStyles.sectionSubtitle}>
          Some Of The Things I've Built
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: '2rem 0'
        }}
      >
        {projectGroup}
      </div>
    </section>
  );
}
