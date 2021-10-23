import { List, ListItem, Paper, Button, Typography } from '@material-ui/core';
import React from 'react';

type AppProps = {
  toc: any;
};

export default function TableOfContents({ toc }: AppProps): JSX.Element {
  return (
    // <Paper>
    <List
      subheader={<Typography variant="h4">Table of Contents</Typography>}
      style={{
        padding: '1rem',
        color: '#cecece'
      }}
    >
      {toc.map((item: string, index: number) => (
        <Button component="a" href={`#C${index + 1}`} alt={item} fullWidth>
          <ListItem style={{ fontSize: '1rem', color: '#cecece' }} divider>
            {`${index + 1}. ${item}`}
          </ListItem>
        </Button>
      ))}
    </List>
    // </Paper>
  );
}
