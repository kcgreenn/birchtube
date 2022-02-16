import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import BlogListItem from './BlogListItem';

type AppProps = {
  title: string;
  posts: any;
};

export default function BlogList({ title, posts }: AppProps): JSX.Element {
  return (
    <div>
      {posts.map(({ node }: any) => (
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
      ))}
    </div>
  );
}
