import React from 'react';

type AppProps = {
  tagList: any;
};

export default function TagsList({
  tagList = ['javascript', 'react', 'devOps', 'compSci', 'node']
}: AppProps): JSX.Element {
  return (
    <aside
      style={{
        padding: '1rem'
      }}
    >
      <h4 style={{ margin: '12px 0' }}>Tags</h4>
      {tagList.map((tag: string, index: number) => (
        <span
          key={index}
          style={{
            margin: '6px 6px',
            color: index % 2 === 0 ? '#0080ff' : 'black'
          }}
        >
          {tag}
        </span>
      ))}
    </aside>
  );
}
