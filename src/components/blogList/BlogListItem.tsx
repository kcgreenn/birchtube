import {
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  blogPostItem: {
    borderTop: '1px solid #cecece',
    marginTop: '2rem'
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
  blogDateSpan: {
    color: '#aeaeae'
  },
  blogListTitle: {
    color: '#6288d5',
    fontWeight: 600
  }
});

type AppProps = {
  title: String;
  publishDate: String;
  summary: String;
};

export default function BlogListItem({
  title,
  publishDate,
  summary
}: AppProps): JSX.Element {
  const matches = useMediaQuery('min-width: 800px');
  const classes = matches ? useStyles() : useMobileStyles();
  return (
    <ListItem button className={classes.blogPostItem}>
      <ListItemText
        primary={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '12px 0px'
            }}
          >
            <Typography variant="h2" className={classes.blogListTitle}>
              {title}
            </Typography>
            <span className={classes.blogDateSpan}>{publishDate}</span>
          </div>
        }
        secondary={
          <>
            <Typography variant="body2" component="span">
              {summary}
            </Typography>
          </>
        }
      ></ListItemText>
    </ListItem>
  );
}
