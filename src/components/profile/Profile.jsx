import PropTypes from "prop-types";
import s from './Profile.module.css';
import profileDefaultImg from './profile-default-img.jpg';


//  const user = { userName = "User Name", tag, location, avatar = profileDefaultImg, stats : { followers, views, likes } };

export default function Profile ({
    username,
    tag,
    location,
    avatar = profileDefaultImg,
    stats: { followers, views, likes  },
}) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                className={s.avatar}
                src={avatar}
                alt="User avatar"
                width={150}
                height={150}
                />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
                
                <ul className={s.stats}>
                    <li className={s.statsItem}>
                    <span className={s.label}>Followers: </span> 
                    <span className={s.quantiti}>{followers}</span>
                    </li>
                    <li className={s.statsItem}>
                    <span className={s.label}>Views: </span>
                    <span className={s.quantiti}>{views}</span>
                    </li>
                    <li className={s.statsItem}>
                    <span className={s.label}>Likes: </span>
                    <span className={s.quantiti}>{likes}</span>
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