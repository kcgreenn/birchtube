import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import * as layoutStyles from './Layout.module.css';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();

type AppProps = {
  children: React.ReactNode;
  bgImg: any;
};

export default function Layout({ children, bgImg }: AppProps): JSX.Element {
  const backgImage = convertToBgImage(bgImg);
  return (
    <body
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <Header />
      <main className={layoutStyles.main}>
        <BgImage image={bgImg} className={layoutStyles.bgImg}>
          <div className={layoutStyles.imgOverlay}>{children}</div>
        </BgImage>
      </main>
      <Footer />
    </body>
  );
}
