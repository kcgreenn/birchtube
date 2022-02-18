import { List, ListItem, Paper, Button, Typography } from '@material-ui/core';
import React from 'react';
import * as TocStyles from './TableOfContents.module.css';

type AppProps = {
  toc: any;
};

export default function TableOfContents({ toc }: AppProps): JSX.Element {
  return (
    <ul className={TocStyles.list}>
      <h4>Table of Contents</h4>
      {toc.map((item: string, index: number) => (
        <li>
          <a href={`#C${index + 1}`} alt={item}>
            {`${index + 1}. ${item}`}
          </a>
        </li>
      ))}
    </ul>
  );
}

{
  /* <List
      subheader={<Typography variant="h4">Table of Contents</Typography>}
      style={{
        padding: '1rem'
      }}
    >
      {toc.map((item: string, index: number) => (
        <Button component="a" href={`#C${index + 1}`} alt={item} fullWidth>
          <ListItem style={{ fontSize: '1rem' }} divider>
            {`${index + 1}. ${item}`}
          </ListItem>
        </Button>
      ))}
    </List> */
}
