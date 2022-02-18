import {
  Typography,
  Grid,
  Container,
  useMediaQuery,
  Paper
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/tableOfContents/TableOfContents';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import { Disqus } from 'gatsby-plugin-disqus';
import * as PostStyles from './BlogPost.module.css';
import Seo from '../../components/seo';
import ReactMarkdown from 'react-mark';

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
      <div className={PostStyles.background}>
        <div className={PostStyles.main}>
          <section className={PostStyles.postMetaData}>
            <span>
              <LocalOfferIcon style={{ marginRight: '8px' }} />
              {post.contentfulBlogPost.tags.join(', ')}
            </span>
            <span>
              <TimelapseIcon style={{ marginRight: '8px' }} />
              {`${post.contentfulBlogPost.fullPost.childMarkdownRemark.timeToRead} Min Read`}
            </span>
          </section>
          <section className={PostStyles.titleWrapper}>
            <h2 className={PostStyles.title}>
              {post.contentfulBlogPost.title}
            </h2>
            <div className={PostStyles.jumbotron}>
              <span className={PostStyles.publishDate}>
                Published on:&nbsp;{post.contentfulBlogPost.publishedDate}
              </span>
              <GatsbyImage
                image={postImg}
                alt={post.contentfulBlogPost.title}
                style={{
                  position: 'absolute',
                  width: '70%'
                }}
              />
              <TableOfContents
                toc={post.contentfulBlogPost.tableOfContents}
                className={PostStyles.toc}
              />
            </div>
          </section>
        </div>
        <article
          className={PostStyles.postBody}
          dangerouslySetInnerHTML={{
            __html: post.contentfulBlogPost.fullPost.childMarkdownRemark.html
          }}
        ></article>
        <Disqus
          config={{
            url: `https://kcgreen.dev/posts${post.slug}`,
            identifier: post.title,
            title: post.title
          }}
        ></Disqus>
      </div>
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

{
  /*
  <Grid item xs={12} md={3}>
    <div className={PostStyles.sideLists}>
      <TableOfContents
        toc={post.contentfulBlogPost.tableOfContents}
      />
    </div>
*/
}
