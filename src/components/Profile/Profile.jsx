import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  StatsItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{followers}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{views}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{likes}</ItemQuantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
