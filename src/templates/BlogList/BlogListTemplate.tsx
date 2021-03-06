import React, { useEffect, useState } from 'react';
import BlogList from '../../components/blogList/BlogList';
import Layout from '../../components/Layout/Layout';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BlogListItem from '../../components/blogList/BlogListItem';
import * as ListStyles from './BlogList.module.css';
import Seo from '../../components/seo';
import { useMediaQuery } from '@react-hook/media-query';

type AppProps = {
  data: any;
  pageContext: any;
};

export default function BlogListTemplate({
  data,
  pageContext
}: AppProps): JSX.Element {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

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
                margin: '1rem',
                paddingBottom: '3rem'
              }}
            >
              {!isFirstPage && (
                <Link className={ListStyles.paginationBtn} to={`${prevPage}`}>
                  &#60;
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, index) => (
                <Link
                  className={
                    currentPage === index + 1
                      ? ListStyles.activePageBtn
                      : ListStyles.paginationBtn
                  }
                  to={`/blog/${index === 0 ? '' : index + 1}`}
                  key={index}
                >
                  {index + 1}
                </Link>
              ))}
              {!isLastPage && (
                <Link className={ListStyles.paginationBtn} to={`${nextPage}`}>
                  &#62;
                </Link>
              )}
            </div>
          </div>
          {/* <div className={ListStyles.sidePanel}>
            <h2>Archives</h2>
          </div> */}
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
