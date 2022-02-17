import propTypes from "prop-types";


export default function FriendsList ({ title, friends }) {
    return (
    <section >
{title && <h2>{title}</h2>}
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
    </section> 
    );
}


FriendsList.proptype = {
    title: propTypes.string,
    friends: propTypes.shape({
        id: propTypes.string.isRequired,
        isOnline: propTypes.string,
        name: propTypes.string,
        avatar: propTypes.string
    }).isRequired,
}