import {
  Typography,
  Grid,
  Container,
  makeStyles,
  useMediaQuery,
  List,
  ListItem,
  Chip,
  Paper
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import TableOfContents from '../components/tableOfContents/TableOfContents';
import TagsList from '../components/tagsList/TagsList';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import { Disqus } from 'gatsby-plugin-disqus';

type AppProps = {
  data: any;
};

const useStyles = makeStyles({
  postBody: {
    padding: '2rem 8rem 2rem 1rem',
    zIndex: '99 !important',
    '& $p': {
      fontSize: '1.25rem'
    },
    '& $h2': {
      fontSize: '1.5rem',
      borderBottom: '1px solid #cecece'
    },
    '& $code': {
      background: '#f4f4f4',
      border: '1px solid #ddd',
      borderRadius: '5px',
      borderLeft: '3px solid #f36d33',
      color: '#666',
      pageBreakInside: 'avoid',
      fontFamily:
        'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace',
      fontSize: '15px',
      lineHeight: '1.6',
      marginBottom: '1.6em',
      maxWidth: '100%',
      overflow: 'auto',
      padding: '1em 1.5em',
      display: 'block',
      wordWrap: 'break-word'
    }
  },
  sideLists: {
    // borderLeft: '1px solid #cecece',
    margin: '2rem 2rem',
    paddingLeft: '2rem'
  },
  mainContent: {
    zIndex: 9900
  }
});
const useMobileStyles = makeStyles({
  postBody: {
    padding: '1rem',
    fontSize: '1rem',
    '& $p': {
      fontSize: '1.25rem'
    },
    '& $h2': {
      fontSize: '1.5rem',
      borderBottom: '1px solid #cecece'
    },
    '& $code': {
      background: '#f4f4f4',
      border: '1px solid #ddd',
      borderRadius: '5px',
      borderLeft: '3px solid #f36d33',
      color: '#666',
      pageBreakInside: 'avoid',
      fontFamily:
        'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace',
      fontSize: '15px',
      lineHeight: '1.6',
      marginBottom: '1.6em',
      maxWidth: '100%',
      overflow: 'auto',
      padding: '1em 1.5em',
      display: 'block',
      wordWrap: 'break-word'
    }
  },
  sideLists: {
    borderTop: '1px solid #cecece',
    margin: '2rem 0rem',
    paddingTop: '2rem'
  },
  mainContent: {}
});

export default function BlogPost({ data: post }: AppProps): JSX.Element {
  const matches = useMediaQuery('(min-width:800px');
  const classes = matches ? useStyles() : useMobileStyles();
  const postImg = getImage(
    post.contentfulBlogPost.jumbotronImage.gatsbyImageData
  );
  return (
    <Layout bgImg={postImg}>
      <Container maxWidth="lg" className={classes.mainContent}>
        <Grid
          container
          justifyContent="flex-start"
          style={{ paddingTop: '96px' }}
        >
          <Grid item xs={12}>
            <Typography
              variant="body1"
              component="p"
              style={{ color: 'white' }}
            >
              <LocalOfferIcon style={{ marginRight: '8px' }} />
              {post.contentfulBlogPost.tags.join(', ')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" style={{ color: 'white' }}>
              {post.contentfulBlogPost.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginBottom: '1rem' }}>
            <Typography
              variant="body1"
              component="h2"
              align="left"
              style={{ color: 'white' }}
            >
              {`Published on: ${post.contentfulBlogPost.publishedDate}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginBottom: '1rem' }}>
            <Typography
              variant="body1"
              component="h2"
              align={matches ? 'right' : 'left'}
              style={{ color: 'white' }}
            >
              <TimelapseIcon style={{ marginRight: '8px' }} />
              {`${post.contentfulBlogPost.fullPost.childMarkdownRemark.timeToRead} Min Read`}
            </Typography>
          </Grid>
          {!matches && (
            <Grid item xs={12} md={3}>
              <div className={classes.sideLists}>
                <TableOfContents
                  toc={post.contentfulBlogPost.tableOfContents}
                />
              </div>
            </Grid>
          )}
          <Grid item xs={12} md={9} style={{ borderTop: '1px solid #cecece' }}>
            <Paper
              className={classes.postBody}
              dangerouslySetInnerHTML={{
                __html:
                  post.contentfulBlogPost.fullPost.childMarkdownRemark.html
              }}
            ></Paper>
          </Grid>
          {matches && (
            <Grid item xs={12} md={3}>
              <div className={classes.sideLists}>
                <TableOfContents
                  toc={post.contentfulBlogPost.tableOfContents}
                />
              </div>
            </Grid>
          )}
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
        gatsbyImageData(placeholder: BLURRED)
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
