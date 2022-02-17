import PropTypes from "prop-types";


export default function FriendsList ({friends}) {
    return (

<ul> 
    {
        friends.map(({ id, isOnline, name, avatar }) => {
return (
    <li 
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
        isOnline: PropTypes.string,
        name: PropTypes.string,
        avatar: PropTypes.string
    }).isRequired,
}