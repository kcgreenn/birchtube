import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Fab,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  useMediaQuery
} from '@material-ui/core';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-theme-material-ui';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import { useStyles, useMobileStyles } from './indexStyles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type AppProps = {
  location: any;
  data: any;
};

// markup
export default function Index({ location, data }: AppProps): JSX.Element {
  const hash = location.hash;

  const projectRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();

  const matches = useMediaQuery('(min-width:800px)');
  const classes = matches ? useStyles() : useMobileStyles();

  if (hash === '#portfolio') {
    if (projectRef && projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  } else if (hash === '#about') {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else if (hash === '#contact') {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const educationItems = [
    {
      school: 'Western Governors University',
      years: '2020 - 2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem architecto magni modi laborum repudiandae suscipit impedit, vero a nam veritatis voluptatem error vitae. Eum.',
      awards: ['Inducted into the NSLS Honor Society']
    },
    {
      school: 'Community College of Philadelphia',
      years: '2017 - 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas suscipit exercitationem laboriosam, recusandae veritatis nemo! Et ad eos odit amet ratione expedita officiis dolorum.',
      awards: []
    }
  ];

  const educationGroup = educationItems.map((item) => (
    <div style={{ padding: '24px 0' }}>
      <Grid item xs={12} md={7} style={{ borderTop: '1px dashed #c3c3c3' }}>
        <Typography
          // className={classes.subtitle}
          variant="h4"
          component="p"
          color="primary"
          style={{
            writingMode: 'vertical-rl',
            float: 'left',
            width: '12px',
            paddingTop: 48
            // color: '#001AFF'
          }}
        >
          {item.years}
        </Typography>
        <Typography
          variant="h3"
          component="h4"
          style={{
            height: '48px',
            padding: '12px',
            fontWeight: 'bold'
          }}
        >
          {item.school}
        </Typography>
      </Grid>

      <Grid item xs={12} md={7}>
        <Typography component="p" style={{ padding: '24px' }}>
          {item.description}
        </Typography>
      </Grid>
      {item.awards.length > 0 ? (
        <Grid item xs={12} md={7} style={{ paddingLeft: '24px' }}>
          <Typography color="primary" variant="h4" component="h2">
            Awards Attained:
          </Typography>
          {item.awards.map((award) => (
            <Typography
              component="li"
              className={classes.subtitle}
              color="textPrimary"
            >
              {award}
            </Typography>
          ))}
        </Grid>
      ) : (
        ''
      )}
    </div>
  ));

  const projects = [
    {
      title: 'Pawmart',
      description:
        'An e-commerce website built with Nextjs, Material-UI, and MongoDB',
      githubLink: 'https://github.com/kcgreenn/geschaft-ecommerce',
      liveLink: 'https://pawmart.xyz',
      image: '../images/pawmart.jpg'
    },
    {
      title: 'Birchtube',
      description: 'My own Blog/Portfolio site made with Gatsbyjs and Strapi.',
      githubLink: 'https://github.com/kcgreenn/birch-tube',
      liveLink: 'https://kcgreen.dev',
      image: '../images/placeholder.png'
    },
    {
      title: 'MD Flow',
      description:
        'A Markdown editor and uploader for Android and iOS, built with React Native.',
      githubLink: 'https://github.com/kcgreenn/md-flow',
      liveLink: 'https://kcgreen.dev',
      image: '../images/placeholder.png'
    },
    {
      title: 'Logistic Regression Loan Prediction',
      description:
        'A python application that uses a logistic regression model and data from the Small Business Administration to predict the outcome of a loan request.',
      githubLink: 'https://github.com/kcgreenn/logreg_loan_prediction',
      liveLink: 'https://github.com/kcgreenn/logreg_loan_prediction',
      image: '../images/placeholder.png'
    },
    {
      title: 'Java Inventory Management System',
      description:
        'A Java application that tracks parts and products in a companies warehouse. Built with Java and Javafx.',
      githubLink: 'https://github.com/kcgreenn/InventoryMgmtSystem',
      liveLink: 'https://github.com/kcgreenn/InventoryMgmtSystem',
      image: '../images/invMgmt.jpg'
    }
  ];

  const projectSection = projects.map(
    ({ title, description, githubLink, liveLink, image }) => (
      <Grid item xs={6} md={3}>
        <Card>
          <CardActionArea>
            <CardMedia style={{ height: 'auto', width: '100%' }} title={title}>
              <StaticImage
                style={{ height: 'auto', width: '100%' }}
                src="../images/invMgmt.jpg"
                alt={title}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h4" component="h4">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}
          >
            <IconButton aria-label="Live Project Link">
              <a href={liveLink} title="Live Deployment">
                <WebIcon color="primary" />
              </a>
            </IconButton>
            <IconButton aria-label="Github Link">
              <a href={githubLink} title="Github Repository">
                <GitHubIcon color="primary" />
              </a>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    )
  );

  return (
    <Layout>
      <div className={classes.profileImgCntnr}>
        <StaticImage
          className={classes.profileImage}
          src="../images/b&wme.jpg"
          alt="KC Green"
        />
      </div>
      <a
        href="https://www.linkedin.com/in/kyle-green-81b3b71a1/"
        title="LinkedIn"
      >
        <Fab
          color="secondary"
          aria-label="LinkedIn"
          className={classes.linkedInBtn}
        >
          <LinkedInIcon color="primary" />
        </Fab>
      </a>
      <a href="https://github.com/kcgreenn" title="Github">
        <Fab
          color="secondary"
          aria-label="github"
          className={classes.githubBtn}
        >
          <GitHubIcon color="primary" />
        </Fab>
      </a>
      <Container className={classes.main}>
        <Grid
          container
          className={classes.portSection}
          // direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item xs={7}>
            <Typography
              variant="h1"
              component="h1"
              className={classes.sectionHead}
            >
              KC Green
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              className={classes.subtitle}
              color="primary"
              variant="h3"
              component="h2"
            >
              Software Developer
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              component="p"
              variant="body1"
              // className={classes.sectionItem}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem aperiam earum ipsa deserunt! Ipsum dolorum ducimus
              quibusdam facilis nesciunt ex. Ipsum saepe reprehenderit fugit
              veritatis provident tempore, libero recusandae quaerat.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Button
              variant="outlined"
              color="primary"
              style={{ width: 160 }}
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
        <Grid
          id="about"
          ref={contactRef}
          container
          className={classes.portSection}
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              className={classes.sectionHead}
            >
              About Me
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.subtitle}
              color="primary"
            >
              My Story
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography component="p" className={classes.sectionItem}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem aperiam earum ipsa deserunt! Ipsum dolorum ducimus
              quibusdam facilis nesciunt ex. Ipsum saepe reprehenderit fugit
              veritatis provident tempore, libero recusandae quaerat.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              className={classes.subtitle}
              variant="h4"
              component="h3"
              color="primary"
            >
              Residence:{' '}
              <Typography
                color="textPrimary"
                component="span"
                variant="body1"
                style={{ paddingRight: '24px' }}
              >
                The Greater Philadelphia Area
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              className={classes.subtitle}
              variant="h4"
              component="h3"
              color="primary"
            >
              Freelance:{' '}
              <Typography component="span" color="textPrimary" variant="body1">
                Available
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              className={classes.subtitle}
              variant="h4"
              color="primary"
              component="h3"
            >
              Email:{' '}
              <Typography component="span" color="textPrimary" variant="body1">
                kyle@kcgreen.dev
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          id="#education"
          container
          className={classes.portSection}
          justifyContent="flex-start"
          alignItems="stretch"
          style={{ position: 'relative', margin: 0, padding: 0 }}
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              className={classes.sectionHead}
            >
              Education
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="primary"
              variant="h3"
              className={classes.subtitle}
            >
              Studied At{' '}
            </Typography>
          </Grid>
          {educationGroup}
        </Grid>
        <Grid
          id="project"
          container
          ref={projectRef}
          className={classes.portSection}
          justifyContent="flex-start"
          alignItems="stretch"
          style={{
            position: 'relative',
            paddingBottom: '5vh'
          }}
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              className={classes.sectionHead}
            >
              Portfolio Projects
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              className={classes.subtitle}
              variant="h3"
              component="h2"
              color="primary"
            >
              Latest Work
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <div className={classes.projectCarousel}> */}
            <Grid
              container
              spacing={1}
              style={{ padding: '24px', paddingLeft: 0 }}
            >
              {projectSection}
            </Grid>
            {/* </div> */}
          </Grid>
        </Grid>
        <Grid
          id="contact"
          container
          ref={contactRef}
          className={classes.portSection}
          justifyContent="flex-start"
          alignItems="stretch"
          component="form"
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              component="h1"
              className={classes.sectionHead}
            >
              Contact Me
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              label="Name"
              variant="outlined"
              required
              id="name"
              name="name"
              className={classes.contactField}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              label="Email"
              variant="outlined"
              required
              id="email"
              name="email"
              className={classes.contactField}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              label="Message"
              variant="outlined"
              required
              id="message"
              name="message"
              className={classes.contactField}
              multiline
              rows={6}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={7}>
            <Button
              className={classes.contactField}
              type="submit"
              variant="outlined"
              color="primary"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
