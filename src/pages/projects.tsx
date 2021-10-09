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
  Typography
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import * as portfolioStyles from '../components/portfolio/PortfolioStyles.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';

export default function ProjectSection(): JSX.Element {
  const data = useStaticQuery(graphql`
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
  const projectGroup = data.allContentfulProject.edges.map(
    ({ node }: any, index: number) => {
      const projImg = getImage(node.image.gatsbyImageData);
      return (
        <Grid item xs={10} md={4} key={node.id}>
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
    }
  );
  return (
    <Layout>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          className={portfolioStyles.sectionTitle}
        >
          Some of My Projects
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              component="a"
              href="https://github.com/kcgreenn"
              fullWidth
              style={{ margin: '2rem 0' }}
            >
              View My Github
            </Button>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
}
