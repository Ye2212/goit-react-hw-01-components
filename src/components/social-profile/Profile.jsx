import PropTypes from "prop-types";
import profileDefaultImg from './profile-default-img.jpg';

export default function Profile ( {
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
                <p class="name">{userName}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>
                
                <ul>
                    <li>
                    <span class="label">Followers: </span>
                    <span class="quantity">{stats.followers}</span>
                    </li>
                    <li>
                    <span class="label">Views: </span>
                    <span class="quantity">{stats.views}</span>
                    </li>
                    <li>
                    <span class="label">Likes: </span>
                    <span class="quantity">{stats.likes}</span>
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