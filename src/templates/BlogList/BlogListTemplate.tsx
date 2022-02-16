import {
  Button,
  Container,
  Fab,
  Grid,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import BlogList from '../../components/blogList/BlogList';
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BlogListItem from '../../components/blogList/BlogListItem';
import * as ListStyles from './BlogList.module.css';
import Seo from '../../components/seo';

type AppProps = {
  data: any;
  pageContext: any;
};

export default function BlogListTemplate({
  data,
  pageContext
}: AppProps): JSX.Element {
  const matches = useMediaQuery('(min-width:821px)');
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext;
  const nextPage = `/blog/${String(currentPage + 1)}`;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`;
  return (
    <Layout>
      <Seo
        description="A Blog containing my thoughts on software development, health and gaming."
        lang="en-US"
        title="Dev Blog"
      />
      <div className={ListStyles.background}>
        <div className={ListStyles.main}>
          <div className={ListStyles.mainContent}>
            <div className={ListStyles.titleWrapper}>
              <h1 className={ListStyles.title}>My Blog</h1>
              <h4 className={ListStyles.subtitle}>
                My thoughts on software development, fitness and gaming
              </h4>
            </div>
            <BlogList
              style={{ margin: 0, padding: 0 }}
              title="blog list"
              posts={data.allContentfulBlogPost.edges}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                margin: '1rem'
              }}
            >
              {!isFirstPage && (
                <a className={ListStyles.paginationBtn} href={`${prevPage}`}>
                  {/* <KeyboardArrowLeftIcon /> */}
                  &#60;
                </a>
              )}
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  className={ListStyles.paginationBtn}
                  href={`/blog/${index === 0 ? '' : index + 1}`}
                  key={index}
                >
                  {index + 1}
                </a>
              ))}
              {!isLastPage && (
                // <Link to={`${nextPage}#list`} rel="next">
                <a className={ListStyles.paginationBtn} href={`${nextPage}`}>
                  {/* <KeyboardArrowRightIcon /> */}
                  &#62;
                </a>
              )}
            </div>
          </div>
          <div className={ListStyles.sidePanel}>
            <h2>Archives</h2>
          </div>
        </div>
      </div>
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
            gatsbyImageData(width: 500, placeholder: BLURRED)
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

{
  /* <Container style={{ paddingTop: '8px' }}>
{matches ? (
  <React.Fragment>
    {/* <Paper> */
}
// <Button
//   style={{
//     margin: 0,
//     padding: 0,
//     boxShadow: '1px 1px 3px #black'
//   }}
//   component="a"
//   href={`/posts/${data.allContentfulBlogPost.edges[0].node.slug}`}
// >
//   <Grid
//     container
//     style={{
//       padding: '1rem',
//       borderRadius: '10px',
//       minHeight: '40vh'
//     }}
//   >
//     <Grid item xs={6} md={6}>
//       <div className={ListStyles.focusImg}>
//         <GatsbyImage
//           image={
//             data.allContentfulBlogPost.edges[0].node.jumbotronImage
//               .gatsbyImageData
//           }
//           title={data.allContentfulBlogPost.edges[0].node.title}
//           alt={data.allContentfulBlogPost.edges[0].node.title}
//         />
//       </div>
//     </Grid>
//     <Grid
//       item
//       xs={6}
//       md={6}
//       style={{
//         marginTop: '1rem',
//         display: 'flex',
//         flexDirection: 'column',
//         color: '#fefefe',
//         justifyContent: 'space-evenly'
//       }}
//     >
//       {/* {matches && ( */}
//       <Typography
//         variant="body1"
//         align={matches ? 'right' : 'left'}
//       >
//         <LocalOfferIcon />
//     &nbsp;{' '}
//     {data.allContentfulBlogPost.edges[0].node.tags.join(', ')}
//   </Typography>
//   {/* )} */}

//   <Typography
//     variant="h3"
//     component="h1"
//     align={matches ? 'right' : 'left'}
//     style={{ fontWeight: 700, margin: '1rem 0' }}
//   >
//     {data.allContentfulBlogPost.edges[0].node.title}
//   </Typography>
//   <Typography align="right" variant="body1" component="span">
//     {data.allContentfulBlogPost.edges[0].node.publishedDate}
//   </Typography>
// </Grid>
//     <Grid
//       item
//       xs={12}
//       style={{
//         marginTop: 24,
//         borderTop: '1px solid #cecece',
//         color: '#cecece'
//       }}
//     >
//       <Typography variant="body1" align="left">
//         {
//           data.allContentfulBlogPost.edges[0].node.fullPost
//             .childMarkdownRemark.excerpt
//         }
//       </Typography>
//     </Grid>
//   </Grid>
// </Button>
{
  /* </Paper> */
}
// </React.Fragment>
// ) : (
// <div style={{ marginTop: '0px', paddingTop: '0px' }}>
//   <BlogListItem
//     title={data.allContentfulBlogPost.edges[0].node.title}
//     slug={data.allContentfulBlogPost.edges[0].node.slug}
//     tags={data.allContentfulBlogPost.edges[0].node.tags}
//     id={data.allContentfulBlogPost.edges[0].node.id}
//     image={
//       data.allContentfulBlogPost.edges[0].node.jumbotronImage
//         .gatsbyImageData
//     }
//     publishDate={
//       data.allContentfulBlogPost.edges[0].node.publishedDate
//     }
//     summary={
//       data.allContentfulBlogPost.edges[0].node.fullPost
//         .childMarkdownRemark.excerpt
//     }
//   />
//   </div>
// )} */}

{
  /* <Grid container style={{ marginTop: '64px' }}>
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
        href={`${prevPage}`}
        size="small"
      >
        <KeyboardArrowLeftIcon />
      </Fab>
    )}
    {Array.from({ length: totalPages }, (_, index) => (
      <Fab
        component="a"
        color="secondary"
        href={`/blog/${index === 0 ? '' : index + 1}`}
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
        href={`${nextPage}`}
        color="secondary"
        size="small"
      >
        <KeyboardArrowRightIcon />
      </Fab>
    )}
  </Grid>
</Grid>
</Container> */
}
