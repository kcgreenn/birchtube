import { Button, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';

export default function ArchiveList() {
  return (
    <List subheader={<Typography variant="h3">Archives</Typography>}>
      <ListItem button divider>
        September 2021
      </ListItem>
      <ListItem button divider>
        August 2021
      </ListItem>
      <ListItem button divider>
        July 2021
      </ListItem>
      <ListItem divider>
        <Button color="primary" variant="outlined">
          {' '}
          See All Posts
        </Button>
      </ListItem>
    </List>
  );
}
