import PropTypes from 'prop-types';

import { FriendCard } from './FriendCard/FriendCard';
import { List } from './FriendsList.styled';

export const FriendsList = ({ items }) => (
  <List>
    {items.map(item => (
      <FriendCard key={item.id} friend={item} />
    ))}
  </List>
);

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
