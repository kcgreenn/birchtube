import { useMediaQuery } from '@react-hook/media-query';
import React, { useEffect, useState } from 'react';
import * as IndexStyles from '../../styles/Index.module.css';

export default function EduSection() {
  const matches = useMediaQuery('only screen and (min-width: 821px)');

  const educationItems = [
    {
      school: 'Western Governors University',
      degree: 'Bachelor of Science',
      subject: 'Computer Science',
      years: '2020 - 2021',
      description:
        'Software Engineering, Advanced Data Management, Operating Systems for Programmers, Discrete Mathematics, Data Structures & Algorithms, Computer Architecture, Fundamentals of Information Security, Project Management, Introduction to Artificial Intelligence',
      awards: ['Inducted into the NSLS Honor Society']
    },
    {
      school: 'Comm. College of Philadelphia',
      degree: 'Associate of Applied Science',
      subject: 'Computer and Information Systems',
      years: '2017 - 2018',
      description: '',
      awards: []
    }
  ];

  const educationGroup = educationItems.map((item, index) => (
    <div
      id="eduCard"
      style={{
        width: '40%',
        minWidth: '312px',
        marginRight: index == 0 ? '5%' : '0'
      }}
    >
      <div id="header">
        <span
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            color: '#0080ff',
            float: 'left',
            fontSize: '.75rem'
          }}
        >
          {item.years}
        </span>
        <h3
          style={{
            textAlign: 'right',
            fontSize: '1.9rem',
            fontWeight: 500
          }}
        >
          {item.school}
        </h3>
      </div>
      <p
        style={{
          textAlign: 'right',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'black',
          lineHeight: '1rem',
          marginTop: '2rem'
        }}
      >
        {item.degree}
      </p>
      <p
        style={{
          textAlign: 'right',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: '#0080ff',
          lineHeight: '2rem',
          margin: '1rem 0'
        }}
      >
        {item.subject}
      </p>
      <p
        style={{
          textAlign: 'right',
          fontWeight: 500,
          fontSize: '.75rem',
          color: 'black'
        }}
      >
        {item.description}
      </p>
      {item.awards.length > 0 && (
        <React.Fragment>
          <h4
            style={{
              textDecoration: 'underline',
              textAlign: 'right',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#0080ff',
              lineHeight: '4rem'
            }}
          >
            Awards Attained / Achievements
          </h4>
          <ul
            style={{
              fontSize: '1rem',
              textAlign: 'right',
              listStyle: 'none'
            }}
          >
            <li>{item.awards[0]}</li>
          </ul>
        </React.Fragment>
      )}
    </div>
  ));

  return (
    <section id="eduSection" className={IndexStyles.indexSection}>
      <div>
        <h2 className={IndexStyles.sectionTitle}>
          <span>Education</span>
        </h2>
        <h3 className={IndexStyles.sectionSubtitle}>Studied At</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{educationGroup}</div>
    </section>
  );
}
