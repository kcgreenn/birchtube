import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Typography
} from '@material-ui/core';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as ItemStyles from './BlogListItem.module.css';

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
  const postImg = getImage(image);

  return (
    <Paper key={id} className={ItemStyles.blogPostItem}>
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
                className={ItemStyles.blogPostTitle}
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
