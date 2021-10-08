import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Button,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import codeImg from '../../images/codeScreen.jpg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    marginTop: '2rem'
  },
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  }
});

const useMobileStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    margin: '4rem 0'
  },
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  }
});

type AppProps = {
  title: string;
  slug: string;
  id: string;
  image: any;
  publishDate: string;
  summary: string;
};

export default function BlogListItem({
  title,
  slug,
  id,
  image,
  publishDate,
  summary
}: AppProps): JSX.Element {
  const matches = useMediaQuery('min-width: 800px');
  const classes = matches ? useStyles() : useMobileStyles();
  const postImg = getImage(image);

  return (
    <Paper key={id}>
      <Button component="a" href={`/posts${slug}`}>
        <Card style={{ padding: '0rem 0' }}>
          <CardActionArea>
            <CardMedia
              title="Post Image"
              style={{ height: 220, maxHeight: 220, overflow: 'hidden' }}
            >
              <GatsbyImage image={postImg} title={title} />
            </CardMedia>
            <CardContent>
              <Typography
                component="span"
                color="secondary"
                style={{ fontSize: '1rem', float: 'right' }}
              >
                {publishDate}
              </Typography>
              <Typography
                gutterBottom
                variant="h4"
                align="left"
                style={{ fontWeight: 600 }}
              >
                {title}
              </Typography>
              <Typography variant="body1" align="left">
                {summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Button>
    </Paper>
  );
}
