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
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import * as ItemStyles from './BlogListItem.module.css';

type AppProps = {
  title: string;
  slug: string;
  id: string;
  tags: string[];
  image: any;
  publishDate: string;
  summary: string;
};

export default function BlogListItem({
  title,
  slug,
  tags,
  id,
  image,
  publishDate,
  summary
}: AppProps): JSX.Element {
  const postImg = getImage(image);

  return (
    <Paper key={id} className={ItemStyles.blogPostItem}>
      <Button component="a" href={`/posts/${slug}`}>
        <Card>
          <CardActionArea>
            <CardMedia
              title="Post Image"
              style={{ height: 200, maxHeight: 220, overflow: 'hidden' }}
            >
              <GatsbyImage image={postImg} title={title} />
            </CardMedia>
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #cecece',
                  paddingBottom: 8,
                  marginBottom: 8
                }}
              >
                <Typography
                  variant="body2"
                  color="primary"
                  component="span"
                  style={{ maxWidth: '80%' }}
                >
                  <LocalOfferIcon />
                  {tags.join(', ')}
                </Typography>
                <Typography component="span" variant="body2" color="secondary">
                  {publishDate}
                </Typography>
              </div>
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
