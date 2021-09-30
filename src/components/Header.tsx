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
import GitHubIcon from '@material-ui/icons/Github';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles({
  root: {},
  brand: {
    color: '#ccc'
  },
  navLinks: {
    display: 'flex'
  },
  navLink: {
    color: '#ccc',
    marginLeft: 16
  }
});

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:800px)');

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const navMenu = matches ? (
    <div className={classes.navLinks}>
      <Link className={classes.navLink} to="/blog">
        <Typography>Blog</Typography>
      </Link>
      <Link className={classes.navLink} to="/#about">
        <Typography>About</Typography>
      </Link>
      <Link className={classes.navLink} to="/#project">
        <Typography>Portfolio</Typography>
      </Link>
      <Link className={classes.navLink} to="/#contact">
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
                  key={item.text}
                  style={{
                    minWidth: '240px'
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
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
          <Link to="/">
            <Typography variant="h4" component="h3" className={classes.brand}>
              KC Green
            </Typography>
          </Link>
          {navMenu}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
