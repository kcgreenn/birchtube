import {
  Button,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import BlogListItem from './BlogListItem';

type AppProps = {
  title: String;
  posts: { title: String; publishDate: String; summary: String }[];
};

export default function BlogList({ title, posts }: AppProps): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={7}>
        <Typography variant="h3" component="h2" align={'center'}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <List>
          {posts.map((post) => (
            <BlogListItem
              title={post.title}
              publishDate={post.publishDate}
              summary={post.summary}
            />
          ))}
          <ListItem style={{ marginTop: '4rem' }}>
            <Button variant="outlined" fullWidth color="primary">
              View More
            </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
