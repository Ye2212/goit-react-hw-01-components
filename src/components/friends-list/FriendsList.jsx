import PropTypes from "prop-types";
import './FriendsList.css';


export default function FriendsList ({friends}) {
    return (

<ul className="friends-list"> 
    {
        friends.map(({ id, isOnline, name, avatar }) => {
return (
    <li className="friends-list__item"
    key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
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