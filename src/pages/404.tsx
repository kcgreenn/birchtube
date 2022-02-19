import * as React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout/Layout';

const NotFoundPage = (): JSX.Element => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const [matches, setMatches] = React.useState(true);

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };
  React.useEffect(() => {
    window.addEventListener('resize', setDimension);
    setMatches(821 <= screenSize.dynamicWidth);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">Page Not Found</Typography>
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
