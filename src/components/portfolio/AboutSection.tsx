import { useMediaQuery } from '@react-hook/media-query';
import React from 'react';
import * as IndexStyles from '../../styles/Index.module.css';

export default function AboutSection() {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

  return (
    <section id="aboutSection" className={IndexStyles.indexSection}>
      <div>
        <h2 className={IndexStyles.sectionTitle}>
          <span>About</span>
          <br />
          <span>Me</span>
        </h2>
        <h3 className={IndexStyles.sectionSubtitle}>My Story</h3>
      </div>
      <p className={IndexStyles.sectionDescription}>
        {' '}
        Hey there! My name is Kyle. I'm a curious software developer who's
        trying to get a bit better everyday. In my free time, I love to
        exercise, watch baseball and read sci-fi novels.
      </p>
      <p style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
        <span style={{ color: '#0080ff', fontWeight: 700 }}>Residence: </span>{' '}
        The Greater Philadelphia Area
      </p>
      <p style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
        <span style={{ color: '#0080ff', fontWeight: 700 }}>Email: </span>{' '}
        kyle@kcgreen.dev
      </p>
      <p style={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
        <span style={{ color: '#0080ff', fontWeight: 700 }}>Freelance: </span>{' '}
        Available
      </p>
    </section>
  );
}
