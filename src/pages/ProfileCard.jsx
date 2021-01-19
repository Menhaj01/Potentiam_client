import React from "react";
import "../styles/profile.css";
import SocialFollow from "../components/SocialFollow";

const ProfileCard = (props) => {
  if (!props.propsFromMainProfile) {
    return <p>Page is loading ...</p>;
  }

  const handleFollow = () => {
    console.log(props.propsFromMainProfile);
  };

  const handleUnfollow = () => {
    console.log(props.propsFromMainProfile);
  };

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="Card-btn">
          <button className="follow-btn">Follow</button>
          <button className="unfollow-btn">Unfollow</button>
        </div>
        <div className="image-follwers ">
          <div className="image-container">
            <img src={props.propsFromMainProfile.image} alt="img" />
          </div>
          <div className="lower-container">
            <span>
              {" "}
              {props.propsFromMainProfile.following
                ? props.propsFromMainProfile.following.length
                : 0}{" "}
              following{" "}
            </span>
            <span>
              {" "}
              {props.propsFromMainProfile.followers
                ? props.propsFromMainProfile.followers.length
                : 0}{" "}
              followers
            </span>
          </div>
        </div>
        <div>
          <SocialFollow propsFromProfileCard={props.propsFromMainProfile} />
        </div>
        <div>
          <h3>Description</h3>
          <p>{props.propsFromMainProfile.description}</p>
        </div>
      </div>
    </div>
  );
};
// }

export default ProfileCard;
