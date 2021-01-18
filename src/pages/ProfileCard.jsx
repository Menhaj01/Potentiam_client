import React from "react";
import "../styles/profile.css";
import SocialFollow from "../components/SocialFollow";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

// class ProfileCard extends React.Component {
const ProfileCard = (props) => {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-follwers ">
          <div className="image-container">
            <img src={props.context.user.image} alt="img" />
          </div>
          <div className="lower-container">
            <span> {props.context.user.following.length} following </span>
            <span> {props.context.user.following.length} followers</span>
          </div>
        </div>
        <div>
          <SocialFollow />
        </div>
        <div>
          <h3>Description</h3>
          <p>{props.context.user.description}</p>
        </div>
      </div>
    </div>
  );
};

export default withUser(ProfileCard);
