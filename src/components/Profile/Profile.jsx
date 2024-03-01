import PropTypes from 'prop-types'; 
import { ProfileContainer, ProfileDesc, ProfileImg, ProfileImgContainer, ProfileLocation, ProfileName, ProfileStats, ProfileTag, Stat, StatLabel, StatQuantity } from './Profile.styled'
import { FiMapPin } from 'react-icons/fi';
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer>
            <ProfileDesc>
                <ProfileImgContainer>
                <ProfileImg
                    src={avatar}
                    alt="User avatar"
                />
              </ProfileImgContainer>
                <ProfileName>{username}</ProfileName>
                <ProfileTag> @{tag}</ProfileTag>
                <ProfileLocation><FiMapPin/>{location}</ProfileLocation>
            </ProfileDesc>

            <ProfileStats>
                <Stat>
                    <StatLabel>Followers</StatLabel>
                    <StatQuantity>{stats.followers}</StatQuantity>
                </Stat>
                <Stat>
                    <StatLabel>Views</StatLabel>
                    <StatQuantity>{stats.views}</StatQuantity>
                </Stat>
                <Stat>
                    <StatLabel>Likes</StatLabel>
                    <StatQuantity>{stats.likes}</StatQuantity>
                </Stat>
            </ProfileStats>
        </ProfileContainer>
    )
   
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}

