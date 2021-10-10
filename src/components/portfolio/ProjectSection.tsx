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
  Typography
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from './PortfolioStyles.module.css';

export default function ProjectSection({ projects }: any): JSX.Element {
  const projectGroup = projects
    .slice(0, 3)
    .map(({ node }: any, index: number) => {
      const projImg = getImage(node.image.gatsbyImageData);
      return (
        <Grid item xs={12} md={4} key={node.id} style={{ marginTop: '12px' }}>
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
              {node.livelink && (
                <IconButton
                  component="a"
                  href={node.livelink}
                  color="secondary"
                  aria-label="Live Project Link"
                >
                  Live
                </IconButton>
              )}

              <IconButton aria-label="Github Link">
                <a href={node.githublink} title="Github Repository">
                  <GitHubIcon color="secondary" />
                </a>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        component="h2"
        className={portfolioStyles.sectionTitle}
      >
        Recent Projects
      </Typography>
      {/* <Paper className={portfolioStyles.portSection}> */}
      <Grid
        container
        className={portfolioStyles.portSection}
        spacing={3}
        id="project"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {projectGroup}
        <Grid item xs={12}>
          <Button
            component="a"
            href="/projects"
            variant="contained"
            color="secondary"
            fullWidth
          >
            View More
          </Button>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </React.Fragment>
  );
}
