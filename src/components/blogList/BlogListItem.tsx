import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Typography
} from '@material-ui/core';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import * as ItemStyles from './BlogListItem.module.css';

type AppProps = {
  title: string;
  slug: string;
  id: string;
  tags: string[];
  image: any;
  publishDate: string;
  summary: string;
};

export default function BlogListItem({
  title,
  slug,
  tags,
  id,
  image,
  publishDate,
  summary
}: AppProps): JSX.Element {
  const postImg = getImage(image);

  return (
    <div className={ItemStyles.blogPostItem} id={id}>
      <a href={`/posts/${slug}`}>
        <GatsbyImage image={postImg} title={title} />
      </a>
      <p className={ItemStyles.blogDateSpan}>{publishDate}</p>
      <a style={{ textDecoration: 'none' }} href={`/posts/${slug}`}>
        <h2 className={ItemStyles.blogPostTitle}>{title}</h2>
      </a>
      <p className={ItemStyles.blogPostExcerpt}>{summary}</p>
      <a className={ItemStyles.readMoreBtn} href={`/posts/${slug}`}>
        Read More
      </a>
    </div>
  );
}
