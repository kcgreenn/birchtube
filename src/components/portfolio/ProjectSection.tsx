import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from './PortfolioStyles.module.css';
import { useMobileStyles, useStyles } from '../../styles/indexStyles';

export default function ProjectSection({ projects }: any): JSX.Element {
  const matches = useMediaQuery('(min-width:821px');
  const classes = matches ? useStyles() : useMobileStyles();
  const projectGroup = projects.map(({ node }: any, index: number) => {
    const projImg = getImage(node.image.gatsbyImageData);
    return (
      <div
        style={{
          width: '40%',
          minWidth: '264px',
          marginRight: '24px',
          marginBottom: '36px',
          border: '1px solid #dedede',
          borderRadius: 10,
          overflow: 'hidden'
        }}
      >
        <a
          href={node.livelink ? node.livelink : node.githublink}
          style={{ borderBottom: '1px solid black' }}
        >
          <GatsbyImage
            image={projImg}
            title={node.description}
            style={{ maxHeight: 180 }}
          />
        </a>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '12px 0 12px 0'
          }}
        >
          {node.livelink && (
            <a
              style={{
                textDecoration: 'none',
                fontFamily: 'Poppins',
                fontSize: '1rem',
                color: 'black',
                textAlign: 'center',
                padding: '4px 0 4px 0',
                flexGrow: 1,
                borderBottom: '1px solid black',
                borderRight: '1px solid black'
              }}
              target="_blank"
              href={node.livelink}
            >
              Live
            </a>
          )}
          <a
            style={{
              textDecoration: 'none',
              fontFamily: 'Poppins',
              padding: '4px 0 4px 0',
              fontSize: '1rem',
              color: 'black',
              flexGrow: 1,
              textAlign: 'center',
              borderBottom: '1px solid black'
            }}
            href={node.githublink}
            target="_blank"
          >
            Github
          </a>
        </div>
        <h3
          style={{
            fontFamily: 'Poppins',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '1rem'
          }}
        >
          {node.title}
        </h3>
      </div>
    );
  });
  return (
    <section id="projectSection" className={classes.indexSection}>
      <div>
        <h2 className={classes.sectionTitle}>
          <span>My</span>
          <br />
          <span>Projects</span>
        </h2>
        <h3 className={classes.sectionSubtitle}>Latest Works</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {projectGroup}
      </div>
    </section>
  );
}
