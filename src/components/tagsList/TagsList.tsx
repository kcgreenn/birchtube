import { Chip, Typography } from '@material-ui/core';
import React from 'react';

export default function TagsList() {
  return (
    <div>
      <Typography variant="h3" style={{ margin: '12px 0' }}>
        Tags
      </Typography>
      <Chip
        label="Javascript"
        component="a"
        href="/blog"
        clickable
        color="primary"
        style={{ margin: '6px 6px' }}
      />
      <Chip
        style={{ margin: '6px 6px' }}
        label="React"
        component="a"
        href="/blog"
        clickable
        color="secondary"
      />
      <Chip
        label="CSS"
        style={{ margin: '6px 6px' }}
        component="a"
        href="/blog"
        clickable
        color="primary"
      />
      <Chip
        label="Docker"
        component="a"
        href="/blog"
        clickable
        style={{ margin: '6px 6px' }}
        color="secondary"
      />
    </div>
  );
}
