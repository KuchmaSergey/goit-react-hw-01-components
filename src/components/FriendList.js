import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";


const FriendList = ({ friends }) => (
  <div className="container">
     <ul className= "" >  
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="">
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;