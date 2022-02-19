import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
      <Link to={`/posts/${slug}`}>
        <GatsbyImage image={postImg} title={title} />
      </Link>
      <p className={ItemStyles.blogDateSpan}>{publishDate}</p>
      <Link style={{ textDecoration: 'none' }} to={`/posts/${slug}`}>
        <h2 className={ItemStyles.blogPostTitle}>{title}</h2>
      </Link>
      <p className={ItemStyles.blogPostExcerpt}>{summary}</p>
      <Link className={ItemStyles.readMoreBtn} to={`/posts/${slug}`}>
        Read More
      </Link>
    </div>
  );
}
