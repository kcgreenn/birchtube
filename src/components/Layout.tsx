import { Container, makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

type AppProps = {
  children: React.ReactNode;
};

const useStyles = makeStyles({
  main: {
    overflow: 'hidden'
  }
});

export default function Layout(props: AppProps): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}
