import PropTypes from 'prop-types';

import { Avatar, Friend, Name, Status } from './FriendCard.styled';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => (
  <Friend>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Friend>
);

FriendCard.propTypes = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}).isRequired;
