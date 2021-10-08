import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from './PortfolioStyles.module.css';

export default function ProjectSection({ projects }: any): JSX.Element {
  const projectGroup = projects.map(({ node }: any) => {
    const projImg = getImage(node.image.gatsbyImageData);
    return (
      <Grid item xs={6} md={4} key={node.id}>
        <Card key={node.id}>
          <CardActionArea component="a" href={node.livelink}>
            <CardMedia style={{ border: '2px solid #bbb' }}>
              <GatsbyImage
                image={projImg}
                title={node.title}
                style={{ height: 180 }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h4" component="h4">
                {node.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {node.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}
          >
            <IconButton aria-label="Live Project Link">
              <a href={node.liveLink} title="Live Deployment">
                <WebIcon color="secondary" />
              </a>
            </IconButton>
            <IconButton aria-label="Github Link">
              <a href={node.githubLink} title="Github Repository">
                <GitHubIcon color="secondary" />
              </a>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        className={portfolioStyles.sectionTitle}
      >
        Recent Projects
      </Typography>
      <Paper className={portfolioStyles.portSection}>
        <Grid
          container
          spacing={3}
          id="project"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          {projectGroup}
        </Grid>
      </Paper>
    </>
  );
}
