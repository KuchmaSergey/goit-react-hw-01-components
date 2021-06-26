import React from "react";
import PropTypes from "prop-types";



const Profile = ({ avatar, name, tag, location, stats }) => (

    <div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt={name}
                width="100"
                className={avatar}
            />
            <p className="name">{name }</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={stats}>
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
  avatar: "http://simpleicon.com/wp-content/uploads/user1.svg",
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    // stats: PropTypes.string.isRequired,
};

export default Profile;