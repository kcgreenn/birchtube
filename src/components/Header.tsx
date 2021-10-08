import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
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
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {},
  brand: {
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    textDecoration: 'none'
  },
  navLink: {
    color: '#ccc',
    marginLeft: 16,
    textDecoration: 'none',
    '& :hover': {
      textDecoration: 'underlined'
    }
  },
  active: {
    color: '#ff9800',
    marginLeft: 16,
    '& :hover': {
      textDecoration: 'underlined'
    }
  }
});

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:800px)');

  const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? classes.active : classes.navLink };
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
    <div className={classes.navLinks}>
      <NavLink className={classes.navLink} to="/blog" key="blog">
        <Typography>Blog</Typography>
      </NavLink>
      <Link className={classes.navLink} to="/" key="about">
        <Typography>About</Typography>
      </Link>
      <Link className={classes.navLink} to="/#project" key="project">
        <Typography>Portfolio</Typography>
      </Link>
      <Link className={classes.navLink} to="/#contact" key="contact">
        <Typography>Contact</Typography>
      </Link>
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
                text: 'About',
                link: '/#about',
                icon: <PersonPinIcon />
              },
              {
                text: 'Portfolio',
                link: '/#project',
                icon: <AppsIcon />
              },
              {
                text: 'Contact',
                link: '/#contact',
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
              <>
                <ListItem
                  button
                  fullWidth
                  key={item.text}
                  style={{
                    minWidth: '240px'
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    color="textSecondary"
                    primary={<Link to={item.link}>{item.text}</Link>}
                  ></ListItemText>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </div>
      </Drawer>
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/">
            <Typography variant="h4" component="h3" className={classes.brand}>
              {data.site.siteMetadata.title}
            </Typography>
          </NavLink>
          {navMenu}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
