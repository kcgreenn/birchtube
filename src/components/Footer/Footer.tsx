import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as HomeStyles from '../../styles/Home.module.css';
import { useMediaQuery } from '@react-hook/media-query';

function Footer() {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          publishedYear
        }
      }
    }
  `);
  return (
    <footer className={HomeStyles.footer}>
      Built By&nbsp;
      <a
        style={{ color: '#0080ff', textDecoration: 'none' }}
        href="https://github.com/kcgreenn"
      >
        {data.site.siteMetadata.author}
      </a>
      &nbsp;-&nbsp;
      {data.site.siteMetadata.publishedYear}&nbsp;
    </footer>
  );
}

export default Footer;

{
  /* <footer style={{ background: '#37474f' }}>
<Container className={FooterStyles.footer}>
  {matches ? (
    <a href="https://github.com/kcgreenn/birchtube">
      <Typography variant="body1" style={{ color: '#ccc' }}>
        Built By&nbsp;{data.site.siteMetadata.author}&nbsp;-&nbsp;
        {data.site.siteMetadata.publishedYear}&nbsp; All Rights Reserved
      </Typography>
    </a>
  ) : (
    <>
      <Typography variant="body1" style={{ color: '#ccc' }}>
        Built By&nbsp;{data.site.siteMetadata.author}&nbsp;-&nbsp;
        {data.site.siteMetadata.publishedYear}&nbsp; All Rights Reserved
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/kcgreenn"
          title="My Github Profile"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://linkedin.com"
          title="My LinkedIn Profile"
        >
          <LinkedInIcon />
        </IconButton>
      </div>
    </>
  )}
</Container>
</footer> */
}
