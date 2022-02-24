import React from 'react';
import * as IndexStyles from '../../styles/Index.module.css';
import ReactRotatingText from 'react-rotating-text';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useMediaQuery } from '@react-hook/media-query';

type AppProps = {
  profileImage: any;
};

export default function IntroSection({ profileImage }: any): JSX.Element {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

  return (
    <section id="introSection" className={IndexStyles.indexSection}>
      <div>
        <p
          style={{ color: '#0080ff', fontFamily: 'Poppins', fontSize: '1rem' }}
        >
          Hi, my name is
        </p>
        <h2 className={IndexStyles.sectionTitle}>
          <span>Kyle</span>
          <br />
          <span>Green</span>
        </h2>
        <ReactRotatingText
          style={{ color: '#0080ff' }}
          className={IndexStyles.sectionSubtitle}
          items={['Developer', 'Designer', 'Data Engineer']}
        />
      </div>
      <p className={IndexStyles.sectionDescription}>
        I'm a software developer that focuses on web applications. I use React
        and Node with Typescipt daily, to create digital experiences for the
        modern web.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <button
          className={IndexStyles.contactCTA}
          onClick={() => scrollTo('#contactSection')}
        >
          Contact Me
        </button>
        <button
          onClick={() => scrollTo('#aboutSection')}
          className={IndexStyles.downwardPointer}
        >
          <div className={IndexStyles.animatedPointer}></div>
        </button>
      </div>
    </section>
  );
}
