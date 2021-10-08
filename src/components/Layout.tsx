import { Container, makeStyles } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

type AppProps = {
  children: React.ReactNode;
  bgImg: any;
};

const useStyles = makeStyles({
  main: {
    overflow: 'hidden',
    backgroundColor: '#3e3e3e',
    paddingBottom: '1rem'
  },
  bgImg: {
    minWidth: 200,
    minHeight: 200
  },
  imgOverlay: {
    background:
      'linear-gradient(180deg, rgba(74,74,74,.6) 0%, rgba(74,74,74,0.7562359943977591) 20%, rgba(74,74,74,1) 49%)'
  }
});

export default function Layout({ children, bgImg }: AppProps): JSX.Element {
  const classes = useStyles();
  const backgImage = convertToBgImage(bgImg);
  return (
    <>
      <Header />
      <main className={classes.main}>
        <BgImage image={bgImg} className={classes.bgImg}>
          <div className={classes.imgOverlay}>{children}</div>
        </BgImage>
      </main>
      <Footer />
    </>
  );
}
