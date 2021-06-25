import React from "react";



const Profile = ({ avatar, name, tag, location, stats }) => (

    <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt={name}
                width="100"
                class={avatar}
            />
            <p class="name">{name }</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class={stats}>
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
  avatar: "http://simpleicon.com/wp-content/uploads/user1.svg",
};



export default Profile;