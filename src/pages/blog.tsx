import {
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import ArchiveList from '../components/archiveList/ArchiveList';
import BlogList from '../components/blogList/BlogList';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import TagsList from '../components/tagsList/TagsList';

const useStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    marginTop: '2rem'
  },
  sideLists: {
    borderLeft: '1px solid #cecece',
    margin: '2rem 0rem',
    paddingLeft: '2rem'
  },
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  }
});

const useMobileStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    marginTop: '2rem'
  },
  sideLists: {
    // borderLeft: '1px solid #cecece',
    margin: '2rem 0rem'
    // paddingLeft: '2rem'
  },
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  }
});

export default function Blog() {
  const matches = useMediaQuery('(min-width:800px)');
  const classes = matches ? useStyles() : useMobileStyles();

  const blogPosts = [
    {
      title: 'What is Docker?',
      publishDate: 'August 20, 2021',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus laboriosam! Iusto, atque perspiciatis excepturi fugiat commodi vero illo iste.'
    },
    {
      title: 'How To: Install and Configure Docker',
      publishDate: 'August 23, 2021',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus laboriosam! Iusto, atque perspiciatis excepturi fugiat commodi vero illo iste.'
    },
    {
      title: 'The Traveling Salesman Problem',
      publishDate: 'July 29, 2021',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus laboriosam! Iusto, atque perspiciatis excepturi fugiat commodi vero illo iste.'
    }
  ];

  return (
    <Layout>
      <Grid container>
        <Jumbotron />
      </Grid>
      <Grid container style={{ marginTop: '15vh' }}>
        <Grid item xs={12} md={9}>
          <BlogList title="Recent Posts" posts={blogPosts} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={7} className={classes.sideLists}>
              <ArchiveList />
            </Grid>
            <Grid item xs={12} md={7} className={classes.sideLists}>
              <TagsList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
