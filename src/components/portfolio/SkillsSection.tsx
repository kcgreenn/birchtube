import React, { useEffect, useState } from 'react';
import * as IndexStyles from '../../styles/Index.module.css';

type AppProps = {
  profileImage: any;
};

export default function SkillSection({ profileImage }: any): JSX.Element {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const [matches, setMatches] = useState(true);

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    setMatches(821 <= screenSize.dynamicWidth);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const skillItems = [
    {
      category: 'Programming',
      skillList: [
        'C / C++',
        'Java / Kotlin',
        'Python / JS',
        'Test Driven Development',
        'Object-Oriented Programming',
        'Functional'
      ],
      credentialLink: '',
      competency: 100
    },
    {
      category: 'Web Development',
      skillList: [
        'HTML5 / CSS3',
        'Javascript / Typescript',
        'Node / Deno',
        'React / Angular',
        'Nextjs / Gatsbyjs',
        'Jest / Cypress',
        "REST API's / GraphQL",
        'Express / Nestjs',
        'Accessibility / SEO'
      ],
      credentialLink: '',
      competency: 100
    },

    {
      category: 'Data Engineering',
      skillList: [
        'Python',
        'Numpy',
        'Pandas',
        'Statistical Analysis with R',
        'Scikit Learn',
        'Stats-model'
      ],
      credentialLink: '',
      competency: 100
    },
    {
      category: 'Program Management',
      skillList: ['Agile', 'Waterfall', 'Scrum', 'Risk Management'],
      credentialLink:
        'https://www.credly.com/badges/50cb7d1a-7f3a-4fb4-83f8-166e7e658888/public_url',
      competency: 100
    }
  ];

  const skillGroup = skillItems.map((item, index) => {
    const skillList = item.skillList?.map((item, index) => <li>{item}</li>);
    return (
      <div
        id="skillCard"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '35%',
          minWidth: '202px',
          height: '364px',
          margin: '1rem 2rem'
        }}
      >
        <h3
          style={{
            textAlign: 'left',
            fontSize: '1.5rem',
            color: '#0080ff'
          }}
        >
          {item.category}
        </h3>
        {item.credentialLink && (
          <a
            style={{
              fontSize: '1rem',
              textDecoration: 'none',
              color: '#0080ff'
            }}
            href={item.credentialLink}
            target="_blank"
          >
            See Credentials
          </a>
        )}

        <ul
          style={{ textAlign: 'left', fontFamily: 'Poppins', fontSize: '1rem' }}
        >
          {skillList}
        </ul>
        <p
          style={{
            width: `${item.competency}%`,
            display: 'block',
            borderBottom: '6px solid #0080ff',
            marginRight: '48px',
            textAlign: 'right',
            color: '#0080ff'
          }}
        >
          {item.competency}%
        </p>
      </div>
    );
  });

  return (
    <section id="skillSection" className={IndexStyles.indexSection}>
      <div>
        <h2
          className={IndexStyles.sectionTitle}
          style={{ lineHeight: '3.5rem' }}
        >
          <span>Dev</span>
          <br />
          <span>Skills</span>
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {skillGroup}
      </div>
    </section>
  );
}
