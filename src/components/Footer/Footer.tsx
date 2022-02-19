import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as HomeStyles from '../../styles/Home.module.css';

function Footer() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const [matches, setMatches] = useState(true);

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    setMatches(821 <= screenSize.dynamicWidth);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
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
