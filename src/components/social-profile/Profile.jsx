import PropTypes from "prop-types";
import profileDefaultImg from './profile-default-img.jpg';


//  const user = { userName = "User Name", tag, location, avatar = profileDefaultImg, stats : { followers, views, likes } };

export default function Profile ({
    userName = "User Name",
    tag,
    location,
    avatar = profileDefaultImg,
    stats
}) {
    return (
        <div>
            <div>
                <img
                src={avatar}
                alt="User avatar"
                />
                <p>{userName}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>
                
                <ul>
                    <li>
                    <span>Followers: </span>
                    <span>{stats.followers}</span>
                    </li>
                    <li>
                    <span>Views: </span>
                    <span>{stats.views}</span>
                    </li>
                    <li>
                    <span>Likes: </span>
                    <span>{stats.likes}</span>
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