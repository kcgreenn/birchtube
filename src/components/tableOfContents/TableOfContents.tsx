import { List, ListItem, Paper, Button, Typography } from '@material-ui/core';
import React from 'react';

type AppProps = {
  toc: any;
};

export default function TableOfContents({ toc }: AppProps): JSX.Element {
  return (
    <Paper>
      <List
        subheader={<Typography variant="h4">Table of Contents</Typography>}
        style={{
          padding: '1rem'
        }}
      >
        {toc.map((item: string, index: number) => (
          <Button component="a" href={`#${item}`} fullWidth>
            <ListItem style={{ fontSize: '1rem' }} divider>
              {`${index + 1}. ${item}`}
            </ListItem>
          </Button>
        ))}
      </List>
    </Paper>
  );
}
