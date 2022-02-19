import * as React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as layoutStyles from './Layout.module.css';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { motion } from 'framer-motion';

deckDeckGoHighlightElement();

type AppProps = {
  children: React.ReactNode;
  bgImg: any;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <body
      style={{
        display: 'flex',
        width: '100vw',
        minHeight: '100vh',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#0080ff'
      }}
    >
      <Header />
      <motion.main
        className={layoutStyles.main}
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 800 }}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
          duration: 0.3
        }}
      >
        {children}
      </motion.main>

      <Footer />
    </body>
  );
}
