import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';;

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ avatar, id, isOnline, name }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    friendName={name}
                />
            ))}
</List>
    )
}


