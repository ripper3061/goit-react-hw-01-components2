import PropTypes from 'prop-types';
import { FriedListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <FriendListSection>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriedListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
