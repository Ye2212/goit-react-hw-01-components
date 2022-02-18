import PropTypes from "prop-types";
import './Profile.css';
import profileDefaultImg from './profile-default-img.jpg';


//  const user = { userName = "User Name", tag, location, avatar = profileDefaultImg, stats : { followers, views, likes } };

export default function Profile ({
    username,
    tag,
    location,
    avatar = profileDefaultImg,
    stats,
}) {
    return (
        <div className="profile">
            <div className="description">
                <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width={150}
                height={150}
                />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
                
                <ul className="stats">
                    <li className="stats__item">
                    <span className="label">Followers: </span> 
                    <span className="quantiti">{stats.followers}</span>
                    </li>
                    <li className="stats__item">
                    <span className="label">Views: </span>
                    <span className="quantiti">{stats.views}</span>
                    </li>
                    <li className="stats__item">
                    <span className="label">Likes: </span>
                    <span className="quantiti">{stats.likes}</span>
                    </li>
                </ul>
        </div>  
    )}

    Profile.prototype = {
        userName: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
    }