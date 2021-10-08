import { Button, List, ListItem, Paper, Typography } from '@material-ui/core';
import React from 'react';

export default function ArchiveList() {
  return (
    <Paper>
      <List
        subheader={
          <Typography variant="h4" align="center">
            Archives
          </Typography>
        }
      >
        <ListItem button divider>
          September 2021
        </ListItem>
        <ListItem button divider>
          August 2021
        </ListItem>
        <ListItem button divider>
          July 2021
        </ListItem>
      </List>
    </Paper>
  );
}
