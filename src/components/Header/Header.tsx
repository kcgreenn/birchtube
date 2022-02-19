import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as HeaderStyles from './Header.module.css';

export default function Header() {
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

  const isActive = ({ isCurrent }) => {
    return {
      className: isCurrent ? HeaderStyles.active : HeaderStyles.navLink
    };
  };

  const NavLink = (props) => <Link getProps={isActive} {...props} />;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const navMenu = matches ? (
    <nav className={HeaderStyles.navLinks}>
      <Link
        className={HeaderStyles.navLink}
        activeClassName={HeaderStyles.active}
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className={HeaderStyles.navLink}
        activeClassName={HeaderStyles.active}
        to="/"
      >
        About
      </Link>
      <Link
        className={HeaderStyles.navLink}
        activeClassName={HeaderStyles.active}
        to="/#projectSection"
      >
        Portfolio
      </Link>
      <Link
        className={HeaderStyles.navLink}
        activeClassName={HeaderStyles.active}
        to="/#contactSection"
      >
        Contact
      </Link>
    </nav>
  ) : (
    <nav className={HeaderStyles.navLinks}>
      <Link
        className={HeaderStyles.navLink}
        activeClassName={HeaderStyles.active}
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className={HeaderStyles.navLink}
        activeClassName={HeaderStyles.active}
        to="/"
      >
        About
      </Link>
    </nav>
  );
  return (
    <header className={HeaderStyles.header}>
      <h2 className={HeaderStyles.brand}>&#60;KC Green&#62;</h2>
      {navMenu}
    </header>
  );
}
