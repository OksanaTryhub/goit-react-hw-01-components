import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

import css from './friendList.module.css';

export default function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));

  return <ul className={css.friendList}>{friendList}</ul>;
}

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
