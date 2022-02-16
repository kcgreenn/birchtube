import {
  Typography,
  Grid,
  Container,
  useMediaQuery,
  Paper
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/tableOfContents/TableOfContents';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import { Disqus } from 'gatsby-plugin-disqus';
import * as PostStyles from './BlogPost.module.css';
import Seo from '../../components/seo';

type AppProps = {
  data: any;
};

export default function BlogPost({ data: post }: AppProps): JSX.Element {
  const matches = useMediaQuery('(min-width:821px');

  const postImg = getImage(
    post.contentfulBlogPost.jumbotronImage.gatsbyImageData
  );

  return (
    <Layout bgImg={postImg}>
      <Seo
        description={post.contentfulBlogPost.title}
        lang="en-US"
        title={post.contentfulBlogPost.title}
      />
      <Container maxWidth="lg">
        <Grid container justifyContent="flex-start">
          <Grid item xs={12} style={{ marginTop: '128px' }}>
            <Typography variant="body1" component="p">
              <LocalOfferIcon style={{ marginRight: '8px' }} />
              {post.contentfulBlogPost.tags.join(', ')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1">
              {post.contentfulBlogPost.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginBottom: '1rem' }}>
            <Typography variant="body1" component="h2" align="left">
              {`Published on: ${post.contentfulBlogPost.publishedDate}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginBottom: '1rem' }}>
            <Typography
              variant="body1"
              component="h2"
              align={matches ? 'right' : 'left'}
            >
              <TimelapseIcon style={{ marginRight: '8px' }} />
              {`${post.contentfulBlogPost.fullPost.childMarkdownRemark.timeToRead} Min Read`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={PostStyles.sideLists}>
              <TableOfContents toc={post.contentfulBlogPost.tableOfContents} />
            </div>
          </Grid>
          <Grid item xs={12} md={9} style={{ borderTop: '1px solid #cecece' }}>
            {/* <ReactMarkdown
              children={
                post.contentfulBlogPost.fullPost.childMarkdownRemark
                  .rawMarkdownBody
              }
              components={CodeBlock}
            /> */}
            <div
              className={PostStyles.postBody}
              dangerouslySetInnerHTML={{
                __html:
                  post.contentfulBlogPost.fullPost.childMarkdownRemark.html
              }}
            ></div>
          </Grid>
          <Grid item xs={12} md={9} style={{ marginTop: '2rem' }}>
            <Paper style={{ padding: '2rem' }}>
              <Disqus
                config={{
                  url: `https://kcgreen.dev/posts${post.slug}`,
                  identifier: post.title,
                  title: post.title
                }}
              ></Disqus>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

// slug variable provided bby context from gatsby-node.js
export const query = graphql`
  query fullPostQuery($slug: String!) {
    contentfulBlogPost(node_locale: { eq: "en-US" }, slug: { eq: $slug }) {
      id
      title
      slug
      publishedDate(formatString: "MMM DD, YY")
      author
      tableOfContents
      tags
      jumbotronImage {
        gatsbyImageData(width: 700, placeholder: BLURRED)
      }
      fullPost {
        childMarkdownRemark {
          timeToRead
          html
          htmlAst
          rawMarkdownBody
        }
      }
    }
  }
`;
