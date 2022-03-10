import PropTypes from "prop-types";
import s from '../FriendsList.module.css';

export default function FriendsListItem( {isOnline, avatar, name} ) {
    return (
        <li className = {s.item}>
        <span
        className={s.status}
        // className = {isOnline? "online": "offline"} 
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        >
        </span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
    </li>
    );
}

FriendsListItem.prototype = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}