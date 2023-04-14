import PropTypes from 'prop-types';

import { FriendCard } from './FriendCard/FriendCard';
import { List } from './FriendsList.styled';

export const FriendsList = ({ items }) => (
  <List>
    {items.map(item => (
      <FriendCard
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    ))}
  </List>
);

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
