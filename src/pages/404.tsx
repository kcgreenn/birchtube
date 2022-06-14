import * as React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import { useMediaQuery } from '@react-hook/media-query';

const NotFoundPage = (): JSX.Element => {
  const matches = useMediaQuery('only screen and (min-width: 821px)');
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">Page Not Found!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Sorry{' '}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{' '}
            we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === 'development' ? (
              <React.Fragment>
                <br />
                Try creating a page in <code>src/pages/</code>.
                <br />
              </React.Fragment>
            ) : null}
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <Link to="/">Go home</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
