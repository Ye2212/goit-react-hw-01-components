import PropTypes from "prop-types";
import s from './FriendsList.module.css';


export default function FriendsList ({friends}) {
    return (

<ul className={s.list}> 
    {
        friends.map(({ id, isOnline, name, avatar }) => {
return (
    <li className = {s.item} key={id}>
        <span
        className={s.status}
        // className = {isOnline? "online": "offline"} 
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        >
        </span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
    </li>
)})
}
</ul>
    );
}

FriendsList.proptype = {
    friends: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        name: PropTypes.string,
        avatar: PropTypes.string
    }).isRequired,
}