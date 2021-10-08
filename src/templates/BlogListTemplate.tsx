import {
  Button,
  Container,
  Fab,
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import ArchiveList from '../components/archiveList/ArchiveList';
import BlogList from '../components/blogList/BlogList';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import TagsList from '../components/tagsList/TagsList';
import { graphql, Link } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BlogListItem from '../components/blogList/BlogListItem';

const useStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    marginTop: '2rem'
  },
  sideLists: {
    borderLeft: '1px solid #cecece',
    margin: '2rem 0rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  },
  focusImg: {
    width: '100%',
    height: '100%'
  }
});

const useMobileStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    marginTop: '2rem'
  },
  sideLists: {
    borderTop: '1px solid #cecece',
    margin: '2rem 0rem',
    paddingTop: '2rem'
  },
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  },
  focusImg: {
    width: '90%',
    maxWidth: '400px',
    height: '100%'
  }
});

type AppProps = {
  data: any;
  pageContext: any;
};

export default function BlogListTemplate({
  data,
  pageContext
}: AppProps): JSX.Element {
  const { blogListQuery } = data;

  const matches = useMediaQuery('(min-width:800px)');
  const classes = matches ? useStyles() : useMobileStyles();
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext;
  const nextPage = `/blog/${String(currentPage + 1)}`;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`;
  return (
    <Layout>
      <Container>
        {matches ? (
          <Paper style={{ marginTop: '96px' }}>
            <Button
              style={{ margin: 0, padding: 0 }}
              component="a"
              href={`/posts${data.allContentfulBlogPost.edges[0].node.slug}`}
            >
              <Grid
                container
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  minHeight: '40vh'
                }}
              >
                <Grid item xs={6} md={6}>
                  <div className={classes.focusImg}>
                    <GatsbyImage
                      image={
                        data.allContentfulBlogPost.edges[0].node.jumbotronImage
                          .gatsbyImageData
                      }
                      title={data.allContentfulBlogPost.edges[0].node.title}
                      alt={data.allContentfulBlogPost.edges[0].node.title}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'
                  }}
                >
                  {/* {matches && ( */}
                  <Typography
                    variant="body1"
                    align={matches ? 'right' : 'left'}
                  >
                    <LocalOfferIcon />
                    &nbsp;{' '}
                    {data.allContentfulBlogPost.edges[0].node.tags.join(', ')}
                  </Typography>
                  {/* )} */}

                  <Typography
                    variant="h3"
                    component="h1"
                    align={matches ? 'right' : 'left'}
                    style={{ fontWeight: 700, margin: '1rem 0' }}
                  >
                    {data.allContentfulBlogPost.edges[0].node.title}
                  </Typography>
                  <Typography align="right" variant="body1" component="span">
                    {data.allContentfulBlogPost.edges[0].node.publishedDate}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: 24, borderTop: '1px solid #cecece' }}
                >
                  <Typography variant="h5" align="left">
                    {
                      data.allContentfulBlogPost.edges[1].node.fullPost
                        .childMarkdownRemark.excerpt
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Paper>
        ) : (
          <div style={{ marginTop: '96px' }}>
            <BlogListItem
              title={data.allContentfulBlogPost.edges[0].node.title}
              slug={data.allContentfulBlogPost.edges[0].node.slug}
              id={data.allContentfulBlogPost.edges[0].node.id}
              image={
                data.allContentfulBlogPost.edges[0].node.jumbotronImage
                  .gatsbyImageData
              }
              publishDate={
                data.allContentfulBlogPost.edges[0].node.publishedDate
              }
              summary={
                data.allContentfulBlogPost.edges[1].node.fullPost
                  .childMarkdownRemark.excerpt
              }
            />
          </div>
        )}

        <Grid container style={{ marginTop: '5vh' }}>
          <Grid item xs={12} id="list">
            <BlogList
              title="Recent Posts"
              posts={data.allContentfulBlogPost.edges.slice(1)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              margin: '1rem'
            }}
          >
            {!isFirstPage && (
              <Fab
                color="secondary"
                component="a"
                href={`${prevPage}#list`}
                size="small"
              >
                <KeyboardArrowLeftIcon />
              </Fab>
            )}
            {Array.from({ length: totalPages }, (_, index) => (
              <Fab
                component="a"
                color="secondary"
                href={`/blog/${index === 0 ? '' : index + 1}#list`}
                size="small"
                key={index}
              >
                {index + 1}
              </Fab>
            ))}
            {!isLastPage && (
              // <Link to={`${nextPage}#list`} rel="next">
              <Fab
                component="a"
                href={`${nextPage}#list`}
                color="secondary"
                size="small"
              >
                <KeyboardArrowRightIcon />
              </Fab>
            )}
          </Grid>
          {!matches && (
            <Grid item xs={12} md={3} className={classes.sideLists}>
              <ArchiveList />
            </Grid>
          )}
        </Grid>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: [publishedDate], order: DESC }
      skip: $skip
      limit: $limit
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "MMM DD, YY")
          author
          tags
          jumbotronImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          fullPost {
            childMarkdownRemark {
              excerpt
              excerptAst
              timeToRead
            }
          }
        }
      }
    }
  }
`;
