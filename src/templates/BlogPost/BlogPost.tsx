import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
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
  const postImg = getImage(
    post.contentfulBlogPost.jumbotronImage.gatsbyImageData
  );

  return (
    <Layout>
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
          </section>
          <div className={PostStyles.jumbotron}>
            <span className={PostStyles.publishDate}>
              Published on:&nbsp;{post.contentfulBlogPost.publishedDate}
            </span>
            <GatsbyImage
              image={postImg}
              className={PostStyles.jumboTronImg}
              alt={post.contentfulBlogPost.title}
            />
            <TableOfContents toc={post.contentfulBlogPost.tableOfContents} />
          </div>
        </div>
        <article
          className={PostStyles.postBody}
          dangerouslySetInnerHTML={{
            __html: post.contentfulBlogPost.fullPost.childMarkdownRemark.html
          }}
        ></article>
        <Disqus
          style={{ width: '512px', maxWidth: '70vw' }}
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
