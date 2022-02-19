import React from 'react';
import * as TocStyles from './TableOfContents.module.css';
import scrollTo from 'gatsby-plugin-smoothscroll';

type AppProps = {
  toc: any;
};

export default function TableOfContents({ toc }: AppProps): JSX.Element {
  return (
    <ul className={TocStyles.list}>
      <h4>Table of Contents</h4>
      {toc.map((item: string, index: number) => (
        <li>
          <button
            onClick={() => scrollTo(`#C${index + 1}`)}
            style={{
              backgroundColor: 'white',
              border: 'none',
              width: '100%',
              textAlign: 'left',
              cursor: 'pointer'
            }}
          >
            {`${index + 1}. ${item}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
