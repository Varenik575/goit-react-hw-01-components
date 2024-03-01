import PropTypes from 'prop-types';
import { ListItem, AvatarContainer, Avatar, FriendName, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, friendName, isOnline, id }) => {
    return (
        <ListItem key={id}>
            <AvatarContainer>
                <Avatar src={avatar} alt="User avatar" width="48" />
            </AvatarContainer>
            
            <FriendName>{friendName}</FriendName>
            {isOnline && <Status></Status>}
        </ListItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
}