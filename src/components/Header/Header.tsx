import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button
} from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'gatsby-theme-material-ui';
import { graphql, useStaticQuery } from 'gatsby';
import brandIcon from '../../images/gatsby-icon.png';
import * as HeaderStyles from './Header.module.css';

export default function Header() {
  const matches = useMediaQuery('(min-width:600px)');

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
    <div className={HeaderStyles.navLinks}>
      <NavLink className={HeaderStyles.navLink} to="/blog" key="blog">
        <Typography>Blog</Typography>
      </NavLink>
      <NavLink className={HeaderStyles.navLink} to="/" key="about">
        <Typography>About Me</Typography>
      </NavLink>
      <NavLink className={HeaderStyles.navLink} to="/projects" key="project">
        <Typography>My Portfolio</Typography>
      </NavLink>
      <NavLink className={HeaderStyles.navLink} to="/contact" key="contact">
        <Typography>Contact</Typography>
      </NavLink>
    </div>
  ) : (
    <IconButton
      aria-label="Open Menu Drawer"
      aria-haspopup="true"
      onClick={toggleDrawer}
    >
      <MenuIcon style={{ color: 'white' }}></MenuIcon>
    </IconButton>
  );
  return (
    <AppBar color="primary">
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '50vh'
            }}
          >
            {[
              { text: 'Blog', link: '/blog', icon: <ImportContactsIcon /> },
              {
                text: 'About Me',
                link: '/',
                icon: <PersonPinIcon />
              },
              {
                text: 'My Portfolio',
                link: '/projects',
                icon: <AppsIcon />
              },
              {
                text: 'Contact',
                link: '/contact',
                icon: <MailIcon />
              },
              {
                text: 'Github',
                link: 'https://github.com/kcgreenn',
                icon: <GitHubIcon />
              },
              {
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/in/kyle-g-81b3b71a1/',
                icon: <LinkedInIcon />
              }
            ].map((item, index) => (
              <React.Fragment>
                <Button component="a" href={`${item.link}`} alt={item.text}>
                  <ListItem
                    key={item.text}
                    style={{
                      minWidth: '240px'
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      color="textSecondary"
                      primary={item.text}
                    ></ListItemText>
                  </ListItem>
                </Button>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ maxHeight: '24px' }}>
            <img
              src={brandIcon}
              alt={data.site.siteMetadata.title}
              style={{ height: '24px' }}
            />
          </div>
          {/* <Typography
            variant="h4"
            component="h3"
            className={HeaderStyles.brand}
          >
            {data.site.siteMetadata.title}
          </Typography> */}
          {navMenu}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
