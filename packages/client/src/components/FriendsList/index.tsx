import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

interface FriendsListProps {
  friends: any[];
  onFriendSelect: (id: string) => void;
}

const FriendsList = ({ friends = [], onFriendSelect }: FriendsListProps) => {
  return (
    <List component="nav" disablePadding>
      {friends.map(({ name, id }, index) => (
        <ListItem
          button
          divider
          onClick={() => onFriendSelect(name)}
          key={index.toString()}
        >
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

export default FriendsList;
