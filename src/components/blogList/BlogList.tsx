import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import BlogListItem from './BlogListItem';

type AppProps = {
  title: string;
  posts: any;
};

export default function BlogList({ title, posts }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        component="h2"
        align={'center'}
        style={{ color: 'white' }}
      >
        {title}
      </Typography>
      <Grid container spacing={3}>
        {posts.map(({ node }: any) => (
          <Grid item xs={12} md={4}>
            <BlogListItem
              key={node.id}
              id={node.id}
              slug={node.slug}
              tags={node.tags}
              image={node.jumbotronImage}
              title={node.title}
              publishDate={node.publishedDate}
              summary={node.fullPost.childMarkdownRemark.excerpt}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
