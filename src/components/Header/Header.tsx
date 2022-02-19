import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useMediaQuery } from '@react-hook/media-query';
import * as HeaderStyles from './Header.module.css';

export default function Header() {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

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
