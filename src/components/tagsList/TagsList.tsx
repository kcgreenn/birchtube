import { Chip, Paper, Typography } from '@material-ui/core';
import React from 'react';

type AppProps = {
  tagList: any;
};

export default function TagsList({
  tagList = ['javascript', 'react', 'devOps', 'compSci', 'node']
}: AppProps): JSX.Element {
  return (
    <Paper
      style={{
        padding: '1rem'
      }}
    >
      <Typography variant="h4" style={{ margin: '12px 0' }} align="center">
        Tags
      </Typography>
      {tagList.map((tag: string, index: number) => (
        <Chip
          key={tag}
          label={tag}
          component="a"
          href="/blog"
          clickable
          color={index % 2 === 0 ? 'primary' : 'secondary'}
          style={{ margin: '6px 6px' }}
        />
      ))}
    </Paper>
  );
}
